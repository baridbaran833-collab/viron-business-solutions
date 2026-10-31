export default function Link({ to, children, ...props }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return <a href={`${base}${to}`} {...props}>{children}</a>;
}
