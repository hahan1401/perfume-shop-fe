import styles from './styles.module.css';

const SUPPORT_ITEMS = ['ĐẢM BẢO CHẤT LƯỢNG', 'HỖ TRỢ NHANH CHÓNG', 'THANH TOÁN TIỆN LỢI', 'GIAO HÀNG NHANH'];

const SupportSection = () => {
  return (
    <div className={styles.supportSectionWrapper}>
      <div className="inner">
        {SUPPORT_ITEMS.map((item) => (
          <div
            key={`${item}-${Math.random()}`}
            className="tag"
          >
            {item}
          </div>
        ))}
        {SUPPORT_ITEMS.map((item) => (
          <div
            key={`${item}-${Math.random()}`}
            className="tag clone"
          >
            {item}
          </div>
        ))}
        {SUPPORT_ITEMS.map((item) => (
          <div
            key={`${item}-${Math.random()}`}
            className="tag clone"
          >
            {item}
          </div>
        ))}
        {SUPPORT_ITEMS.map((item) => (
          <div
            key={`${item}-${Math.random()}`}
            className="tag clone"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportSection;
