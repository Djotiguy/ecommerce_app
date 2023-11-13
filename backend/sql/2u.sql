ALTER TABLE public.commande_ligne
ADD CONSTRAINT fk_commande_ligne_products_id
FOREIGN KEY (products_id)
REFERENCES public.products (id);

ALTER TABLE public.commande_ligne
ADD CONSTRAINT fk_commande_ligne_commande_id
FOREIGN KEY (commande_id)
REFERENCES public.commande (id);
