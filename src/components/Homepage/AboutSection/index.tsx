import Container from '@/components/ui/Container';
import ExpandableParagraph from '@/components/ui/ExpandableParagraph';
import SectionTitle from '@/components/ui/SectionTitle';

const AboutSection = () => {
  return (
    <Container>
      <SectionTitle>About Our</SectionTitle>

      <ExpandableParagraph
        initialElement={
          <p className="text-center">
            “LAN” có nghĩa là thương hiệu cá nhân vì CEO Nguyễn Ngọc Lân tin rằng mọi thứ xuất phát từ đam mê và khát
            vọng cá nhân là chìa khóa dẫn đến thành công. Lan Perfume mong muốn lan tỏa nguồn năng lượng tích cực này
            đến với mọi người. Đặc biệt nhất chính là sự thỏa mãn đam mê về vẻ đẹp của những tầng hương và sự thăng hoa
            của cảm xúc.
          </p>
        }
        expandableElement={
          <p className="mt-4 text-center">
            Với phương châm làm việc từ cái tâm, luôn đặt chữ tín và chất lượng sản phẩm lên hàng đầu, những sản phẩm từ
            Lan Perfume phải mang đến sự tin tưởng hoàn toàn cho những người sử dụng. Lan Perfume luôn là người bạn đồng
            hành, là người thấu hiểu những đam mê và ước mơ của bạn. Mỗi mùi hương mà Lan Perfume gửi tới bạn chính là
            một loại trang sức “vô hình” ghi dấu những thông điệp chân thành nhất của mỗi cá nhân.
          </p>
        }
      />

      <p className="mt-6">
        hơn cả mùi hương, nước hoa là một tác phẩm nghệ thuật với sự kết hợp tinh tế giữa các nốt hương để tạo nên dấu
        ấn khó phai. Mỗi giọt hương nước hoa là một bản giao hưởng của cảm xúc, một câu chuyện kể về phong cách và cá
        tính riêng. LAN Perfume – Một trong những shop nước hoa chính hãng, nhập khẩu từ các thương hiệu nổi tiếng trên
        thế giới. Hãy cùng bước vào thế giới của những mùi hương đầy mê hoặc, quyến rũ tại Shop nước hoa LAN
        Perfume.{' '}
      </p>
    </Container>
  );
};

export default AboutSection;
