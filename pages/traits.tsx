import { useTranslation } from '@/components/Translation';
import { traits } from '@/traits';

const Traits = () => {
  const t = useTranslation();

  return (
    <>
      <div className="section">
        <div className="container is-max-widescreen">
          <div className="columns is-multiline">
            {traits.sort().map((role) => (
              <div className="column is-12 is-6-desktop is-4-widescreen">
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-header">
                    <div className="card-header-title">
                      <p className="title">{t(`roles:${role}.title`)}</p>
                    </div>
                  </div>
                  <div className="card-content">
                    <div
                      className="content px-2 pb-2"
                      dangerouslySetInnerHTML={{
                        __html: t(`roles:${role}.description`),
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Traits;
