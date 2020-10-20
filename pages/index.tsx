import Link from 'next/link';
import { useTranslation } from '@/components/Translation';

const Index = () => {
  const t = useTranslation();

  return (
    <>
      <div className="section">
        <div className="container box">
          <div className="content is-medium">
            <div dangerouslySetInnerHTML={{ __html: t('content.why') }}></div>
            <div dangerouslySetInnerHTML={{ __html: t('content.how') }}></div>
          </div>
          <div className="mt-6 has-text-centered">
            <Link href="/random">
              <button className="button is-dark is-medium">
                {t('getTrait')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
