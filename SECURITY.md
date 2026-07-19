# Configuración de seguridad

## Supabase

La clave `sb_publishable_...` del navegador es pública por diseño. La protección real debe aplicarse en Postgres.

Ejecuta y verifica en el SQL Editor de Supabase:

```sql
alter table public.visits enable row level security;

revoke all on table public.visits from anon, authenticated;
grant select (id, total) on table public.visits to anon;

drop policy if exists "public can update visits" on public.visits;
drop policy if exists "anon can update visits" on public.visits;

create policy "public can read visit total"
on public.visits
for select
to anon
using (id = 1);
```

Revisa en **Database > Security Advisor** que no haya tablas públicas sin RLS. No coloques nunca una clave `sb_secret_...` o `service_role` en HTML o JavaScript del navegador.

El contador está deliberadamente en solo lectura. Para volver a incrementarlo, usa una función de servidor con rate limiting y una operación SQL atómica; no concedas `UPDATE` a `anon`.

## Despliegue

`vercel.json` aplica CSP y otras cabeceras defensivas. Después de cada despliegue, comprueba la consola del navegador y las cabeceras de la respuesta antes de ampliar la CSP.
