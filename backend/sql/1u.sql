create extension if not exists citext;

create table if not exists public.users(
    id bigserial primary key,
    username citext not null,
    addresse citext not null,
    pwd text,
    created_at timestamp default now(),
    updated_at timestamp default now()
);


create table if not exists public.products(
  id bigserial primary key,
  name citext not null,
  price int not null,
  inventory int not null,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

create table if not exists public.commande(
  id bigserial primary key,
  users_id bigint references public.users (id),
  status citext not null,
  prix_total int not null,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

create table if not exists public.commande_ligne(
  id bigserial primary key,
  commande_id bigint references public.commande (id),
  products_id bigint references public.products (id),
  prix_unitaire int not null,
  quantite int not null,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

create index commande_users_id_index on public.commande (users_id);
create index commande_ligne_products_id_index on public.commande_ligne (products_id);
create index commande_commande_ligne_index on public.commande_ligne (commande_id);
