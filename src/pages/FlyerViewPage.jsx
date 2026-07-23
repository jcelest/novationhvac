import { Helmet } from 'react-helmet-async';
import './FlyerViewPage.css';

export default function FlyerViewPage({ title, imageSrc, imageAlt }) {
  return (
    <div className="flyer-view-page">
      <Helmet>
        <title>{title}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <img className="flyer-view-image" src={imageSrc} alt={imageAlt} />
    </div>
  );
}
