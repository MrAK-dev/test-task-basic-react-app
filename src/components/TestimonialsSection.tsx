import React, { useState } from 'react';
import './TestimonialsSection.css';
import Button from './Button.tsx';

// Данные отзывов (первые 8: 4 с макета, 4 сгенерированные)
const testimonials = [
  {
    avatar: '', // заглушка
    name: 'Brooklyn Simmons',
    subtitle: 'manam',
    text: 'Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.',
  },
  {
    avatar: '',
    name: 'Esther Howard',
    subtitle: 'Offmax',
    text: 'Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.',
  },
  {
    avatar: '',
    name: 'Arlene McCoy',
    subtitle: 'bloopixel',
    text: 'Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.',
  },
  {
    avatar: '',
    name: 'Jane Cooper',
    subtitle: 'unpexel',
    text: 'Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis.',
  },
  // Сгенерированные отзывы
  {
    avatar: '',
    name: 'Wade Warren',
    subtitle: 'pixelhub',
    text: 'Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    avatar: '',
    name: 'Cody Fisher',
    subtitle: 'brandly',
    text: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.',
  },
  {
    avatar: '',
    name: 'Kristin Watson',
    subtitle: 'offmax',
    text: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus.',
  },
  {
    avatar: '',
    name: 'Ronald Richards',
    subtitle: 'manam',
    text: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.',
  },
];

const AVATAR_PLACEHOLDER = 'https://api.dicebear.com/7.x/avataaars/svg?seed=';

const TestimonialsSection: React.FC = () => {
  const [page, setPage] = useState(0); // 0 — первые 4, 1 — следующие 4
  const pageSize = 4;
  const total = testimonials.length;

  // Циклическая прокрутка: всегда показывать 4 подряд, начиная с page*pageSize
  const getVisible = () => {
    const start = page * pageSize;
    if (start + pageSize <= total) {
      return testimonials.slice(start, start + pageSize);
    }
    // Если вышли за пределы — берем с конца и с начала
    return [
      ...testimonials.slice(start, total),
      ...testimonials.slice(0, (start + pageSize) % total),
    ];
  };

  const maxPage = Math.ceil(total / pageSize) - 1;

  const handlePrev = () => setPage((p) => (p === 0 ? maxPage : p - 1));
  const handleNext = () => setPage((p) => (p === maxPage ? 0 : p + 1));

  const visible = getVisible();

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header-row">
          <h2 className="testimonials-title">Hear what our customers say :)</h2>
          <div className="testimonials-nav">
            <Button variant="nav" onClick={handlePrev} aria-label="Previous testimonials">&#x2039;</Button>
            <Button variant="nav" onClick={handleNext} aria-label="Next testimonials">&#x203A;</Button>
          </div>
        </div>
        <div className="testimonials-row">
          {visible.map((t, i) => (
            <div className="testimonial-card" key={t.name + i}>
              <div className="testimonial-header">
                <img className="testimonial-avatar" src={AVATAR_PLACEHOLDER + encodeURIComponent(t.name)} alt={t.name} width={48} height={48} />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-subtitle">{t.subtitle}</div>
                </div>
              </div>
              <div className="testimonial-text">{t.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 