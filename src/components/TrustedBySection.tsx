import React from 'react';
import './TrustedBySection.css';

const logos = [
  '00-logoipsum.svg', '01-offmax.svg', '02-offmax.svg', '03-offmax.svg', '04-logoipsum.svg', '05-logoipsum.svg', '06-logoipsum.svg',
  '07-logoipsum.svg', '08-logoipsum.svg', '09-offmax.svg', '10-offmax.svg', '11-logoipsum.svg', '12-logoipsum.svg', '13-logoipsum.svg',
];

const firstRow = logos.slice(0, 7);
const secondRow = logos.slice(7, 14);

const TrustedBySection: React.FC = () => {
  return (
    <section className="trustedby">
      <div className="container">
        <div className="trustedby-content">
          <div className="trustedby-left">
            <h2 className="trustedby-title">Trusted by 200+ companies around the world</h2>
          </div>
          <div className="trustedby-right">
            <p className="trustedby-desc">
              Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.
            </p>
          </div>
        </div>
        <div className="trustedby-logos">
          <div className="trustedby-logos-row trustedby-logos-row--first">
            {firstRow.map((logo) => (
              <div className="trustedby-logo-item" key={logo}>
                <img
                  src={`/img/trustedBy/${logo}`}
                  alt={`Company logo ${logo.replace(/\.[^.]+$/, '')}`}
                  className="trustedby-logo-img"
                />
              </div>
            ))}
          </div>
          <div className="trustedby-logos-row trustedby-logos-row--second">
            {secondRow.map((logo) => (
              <div className="trustedby-logo-item" key={logo}>
                <img
                  src={`/img/trustedBy/${logo}`}
                  alt={`Company logo ${logo.replace(/\.[^.]+$/, '')}`}
                  className="trustedby-logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection; 