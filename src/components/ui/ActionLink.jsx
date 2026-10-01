export default function ActionLink({ href, variant = 'coral', children, className = '' }) {
  return (
    <a className={`button button-${variant} ${className}`.trim()} href={href}>
      {children}
    </a>
  );
}