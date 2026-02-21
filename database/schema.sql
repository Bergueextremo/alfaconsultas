-- profiles table
create table public.profiles (
  id uuid not null primary key references auth.users(id) on delete cascade,
  full_name text,
  role text default 'client' check (role in ('client', 'admin')),
  created_at timestamptz default now() not null
);

alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone." on public.profiles
  for select using (true);

create policy "Users can update own profile." on public.profiles
  for update using (auth.uid() = id);

-- services table
create table public.services (
  id uuid not null default gen_random_uuid() primary key,
  title text not null,
  description text,
  price numeric not null,
  slug text unique not null,
  features text[] default '{}',
  created_at timestamptz default now() not null
);

alter table public.services enable row level security;

create policy "Services are viewable by everyone." on public.services
  for select using (true);
  
-- seed services
insert into public.services (title, description, price, slug) values
('Remoção de Nome em Sites Jurídicos', 'Limpeza em Jusbrasil, Escavador, etc.', 297.00, 'remocao-sites-juridicos'),
('Consultoria de Rating de Crédito', 'Aumente seu Score no Serasa.', 147.00, 'consultoria-rating'),
('Regularização BACEN SCR', 'Retirada de apontamentos de prejuízo.', 397.00, 'regularizacao-bacen'),
('Alfa AntecipaGov', 'Antecipação de crédito administrativo.', 0.00, 'antecipa-gov'),
('Transação Tributária PGFN', 'Negociação de dívidas ativas.', 0.00, 'transacao-tributaria'),
('Crédito Consignado', 'Para Servidores Públicos.', 0.00, 'credito-consignado'),
('Empréstimo Empresarial', 'Capital de Giro rápido.', 0.00, 'emprestimo-empresarial');

-- orders table
create table public.orders (
  id uuid not null default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) not null,
  service_id uuid references public.services(id) not null,
  status text default 'pending' check (status in ('pending', 'processing', 'completed', 'cancelled')),
  form_data jsonb default '{}'::jsonb,
  created_at timestamptz default now() not null
);

alter table public.orders enable row level security;

create policy "Users can view own orders." on public.orders
  for select using (auth.uid() = user_id);

create policy "Users can insert own orders." on public.orders
  for insert with check (auth.uid() = user_id);

create policy "Admins can view all orders." on public.orders
  for select using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and role = 'admin'
    )
  );

-- messages table
create table public.messages (
  id uuid not null default gen_random_uuid() primary key,
  order_id uuid references public.orders(id) on delete cascade not null,
  sender_id uuid references public.profiles(id) not null,
  content text not null,
  created_at timestamptz default now() not null
);

alter table public.messages enable row level security;

create policy "Users can view messages for their orders." on public.messages
  for select using (
    exists (
      select 1 from public.orders
      where orders.id = messages.order_id and orders.user_id = auth.uid()
    )
  );

create policy "Users can insert messages for their orders." on public.messages
  for insert with check (
    exists (
      select 1 from public.orders
      where orders.id = messages.order_id and orders.user_id = auth.uid()
    )
  );
