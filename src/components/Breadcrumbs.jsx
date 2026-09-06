import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

export default function Breadcrumbs({ items }) {
  if (!items?.length) return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path || item.name} className="breadcrumbs-item">
              {isLast || !item.path ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link to={item.path}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
