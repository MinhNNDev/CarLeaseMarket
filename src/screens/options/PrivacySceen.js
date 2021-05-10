import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {COLORS, STYLE} from '../../utils/Theme';
import {Header} from '../../common/components';

const PrivacyPolicy = () => {
  return (
    <Text style={styles.text}>
      Trách nhiệm của khách thuê xe và chủ xe trong giao dịch cho thuê xe tự lái
      Sứ mệnh của CarLease là sản thương mại điện tử để những người có nhu cầu
      di chuyển bằng ô tô tìm thấy những chiếc xe phù hợp, mang lại thu nhập cho
      chủ xe và góp phần sử dụng hiệu quả tài sản của họ.. Vì thế, để đảm bảo
      các giao dịch thuê xe trên nền tảng CarLease được diễn ra một cách thuận
      lợi, hợp pháp và có lợi cho cả ba bên thì việc quy định trách nhiệm và
      nghĩa vụ của các bên, nhằm tuân thủ chính sách của CarLease và các điều
      khoản cam kết là rất quan trọng. Trách nhiệm của chủ xe – Giao xe và toàn
      bộ giấy tờ liên quan đến xe đúng thời gian và trong tình trạng an toàn, vệ
      sinh sạch sẽ nhằm đảm bảo chất lượng dịch vụ. – Các giấy tờ xe liên quan
      bao gồm: giấy đăng ký xe, giấy kiểm định, giấy bảo hiểm xe (CarLease
      khuyến cáo chủ xe dùng tất cả là bản photo công chứng để đảm bảo an toàn
      cho bản gốc). – Chịu trách nhiệm pháp lý về nguồn gốc và quyền sở hữu của
      xe. Trách nhiệm khách thuê xe – Kiểm tra kỹ xe trước khi nhận và trước khi
      hoàn trả xe. – Kí hợp đồng thuê xe từ chủ xe sau khi đã đọc kỹ các điều
      khoản. – Thanh toán đầy đủ tiền thuê xe cho Chủ xe sau khi trả xe (hoặc
      tuỳ thoả thuận với chủ xe). – Xuất trình đầy đủ các giấy tờ liên quan cho
      chủ xe theo yêu cầu chủ xe đã liệt kê trên nền tảng CarLease: CMND, GPLX,
      Hộ khẩu hoặc KT3. Đặt cọc Hộ khẩu/KT3, tiền mặt (15 triệu đồng hoặc tùy
      thỏa thuận với chủ xe) hoặc tài sản có giá trị tương đương (xe máy và cà
      vẹt xe) trước khi nhận xe. – Tuân thủ quy định và thời gian trả xe như 2
      bên đã thỏa thuận. – Chịu trách nhiệm đền bù mọi thất thoát về phụ tùng,
      phụ kiện của xe, đền bù 100% theo giá phụ tùng chính hãng nếu phát hiện
      phụ tùng bị tráo đổi, chịu 100% chi phí sửa chữa xe nếu có xảy ra hỏng hóc
      tùy theo mức độ hư tổn của xe, chi phí các ngày xe nghỉ không chạy được do
      lỗi của khách thuê xe (giá được tính bằng giá thuê trong hợp đồng) và các
      khoản phí vệ sinh xe nếu có. Trách nhiệm và khuyến nghị của CarLease –
      Đồng hành cùng khách hàng: CarLease hỗ trợ tiến hành thủ tục giao dịch
      giao nhận xe giữa chủ xe và khách thuê. Các vấn đề phát sinh trong suốt
      quá trình giao dịch, CarLease có vai trò trung gian hỗ trợ giải quyết. Tuy
      nhiên quyền quyết định thuộc về hai bên chủ xe và khách thuê. CarLease
      không chịu trách nhiệm trong trường hợp giao dịch không thực hiện theo quy
      trình cho thuê xe và các điều khoản mà CarLease đã quy định. Hãy đảm bảo
      mọi giao dịch được thực hiện minh bạch, rõ ràng và đúng quy trình mà chúng
      tôi đã hướng dẫn. – Bảo đảm quyền lợi chủ xe và khách thuê: CarLease có
      quyền khóa tài khoản của chủ xe nếu CarLease xác nhận trên hệ thống khách
      hàng tạo xe ảo, thông tin sai lệch, vi phạm các điều khoản đã cam kết,…
      dẫn tới thiệt hại về uy tín của CarLease và quyền lợi của người dùng khác.
      CarLease có quyền khóa tài khoản của khách thuê xe khi CarLease xác nhận
      trên hệ thống khách hàng có dấu hiệu đặt xe ảo, các hành vi chiếm đoạt tài
      sản hoặc có dấu hiệu vi phạm điều khoản đã cam kết,… dẫn tới thiệt hại về
      uy tín của CarLease và quyền lợi của người dùng khác. – Thanh toán:
      CarLease có trách nhiệm xác nhận đặt cuốc xe thành công ngay khi nhận được
      đầy đủ tiền cọc từ khách hàng. Sau khi cuốc xe thành công, CarLease sẽ
      hoàn tiền 15% đặt cọc của khách thuê cho chủ xe đầy đủ và đúng hạn. – Bảo
      mật thông tin: Khi sử dụng dịch vụ của chúng tôi, khách hàng tin tưởng
      cung cấp thông tin cho chúng tôi. Chúng tôi hiểu rằng đây là một trách
      nhiệm to lớn và chúng tôi luôn nỗ lực bảo vệ thông tin của khách hàng một
      cách tối đa, bao gồm: Số điện thoại, hình ảnh, vị trí và một số thông tin
      khác khách hàng cung cấp. Các hình ảnh thông tin giao dịch đều được chúng
      tôi bảo mật. Chúng tôi truy cập hình ảnh vị trí khi khách hàng cung cấp
      quyền trên thiết bị để phục vụ mục đích thuê – cho thuê xe, hiển thị
      khoảng cách và các thông số khác để hỗ trợ giao dịch thuê xe diễn ra thuận
      tiện nhất. Trong một số trường hợp xảy ra tranh chấp, khi có yêu cầu của
      cơ quan chức năng chúng tôi sẽ cung cấp thông tin để phục vụ quá trình
      điều tra, giải quyết tranh chấp. Chính sách hủy giao dịch Dành cho khách
      thuê xe Bạn là khách thuê xe, sau khi đặt xe thành công, bạn có thể hủy
      giao dịch thuê xe đã đặt bằng chức năng “Huỷ thuê xe” thông qua trang web
      CarLease.vn hoặc ứng dụng di động CarLease. Nếu thật sự muốn hủy cuốc xe,
      khách thuê nên lưu ý thực hiện việc này càng sớm càng tốt và trước khi
      thực hiện việc đặt cọc, CarLease sẽ hỗ trợ hủy cuốc hoàn toàn miễn phí.
      Nếu khách thuê tiến hành hủy cuốc xe sau khi đã đặt cọc, với lí do chủ
      quan đến từ khách thuê, tương đương với việc xác nhận đồng ý với điều
      khoản của CarLease, 30% đặt cọc khách thuê sẽ không được nhận lại. Trong
      trường hợp lỗi từ chủ xe ( giấy tờ xe không đầy đủ, xe không đúng với
      thông tin đăng tải, chủ xe có những yêu cầu phát sinh không thỏa đáng,… )
      khách thuê vui lòng liên hệ đến tổng đài chăm sóc khách hàng của CarLease
      để chúng tôi hỗ trợ giải quyết và hoàn trả phí đặt cọc. Trong trường hợp
      khách thuê xe thực hiện hủy giao dịch nhiều lần sẽ bị tạm khóa tài khoản
      thành viên trên nền tảng CarLease. Dành cho chủ xe Hiện tại chủ xe chưa
      được phép huỷ giao dịch thuê xe. Chủ xe cần cân nhắc kỹ trước khi xác nhận
      cho thuê xe vì sẽ không được phép huỷ. Trong trường hợp có vấn đề đột xuất
      xảy ra khi đã xác nhận cuốc xe thuê nhưng không thể giao xe cho khách
      thuê, chủ xe trực tiếp liên hệ đến tổng đài của CarLease để bộ phận chăm
      sóc khách hàng hỗ trợ giải quyết, đảm bảo quyền lợi cho khách thuê. Nếu
      vấn đề xác nhận cuốc xe rồi hủy cuốc xảy ra nhiều lần, CarLease sẽ có văn
      bản cảnh cáo gửi đến chủ xe để yêu cầu chủ xe có trách nhiệm hơn trong
      việc sử dụng dịch vụ của chúng tôi. Nếu vẫn tiếp diễn hành vi, CarLease có
      quyền khóa hoặc xóa tài khoản của chủ xe vĩnh viễn trên nền tảng của chúng
      tôi. Chính sách giá Dành cho khách thuê xe Trên ứng dụng CarLease, mỗi
      chiếc xe sẽ được cho thuê với các mức giá khác nhau tùy thuộc vào quyết
      định của các chủ xe và được niêm yết công khai ở phần thông tin mỗi chiếc
      xe. Về cơ bản, cơ cấu giá của một chuyến đi được tính bao gồm các thành
      phần: – Đơn giá thuê: Là giá thuê niêm yết bởi chủ xe mà bạn dễ dàng nhìn
      thấy trong phần thông tin xe. Giá thuê trên CarLease được tính theo đơn vị
      nhỏ nhất là ngày. Chủ xe có thể điều chỉnh giá thuê khác nhau cho từng
      ngày, chính vì vậy, chi phí thuê xe của bạn có thể tăng hoặc giảm tùy vào
      thời điểm đăng ký thuê xe. Thông thường, giá thuê sẽ cao hơn trong dịp
      cuối tuần và các ngày lễ, Tết. – Chi phí vận chuyển: nếu khách thuê không
      có thời gian đến địa điểm của chủ xe để nhận xe, bạn có thể lựa chọn các
      chủ xe có cung cấp thêm dịch vụ giao xe tận nơi. Chi phí giao xe bình quân
      từ 5,000-15,000VND/km tùy vào quyết định của chủ xe được thể hiện tại phần
      thông tin xe nhưng sẽ không cộng vào chi phí thuê xe và không làm thay đổi
      tiền cọc mà khách thuê phải đặt cọc cho CarLease (bạn sẽ thanh toán riêng
      với chủ xe phần đó sau). Khi đã tiến hành đặt xe đồng nghĩa với việc khách
      thuê đã đồng ý với giá thuê xe và các yêu cầu kèm theo. Dành cho Chủ xe
      Các chủ xe của CarLease được quyền thiết lập giá thuê xe hàng ngày cho xe
      của mình. Bạn có thể sử dụng giá đề xuất của CarLease hoặc có thể tùy
      chỉnh giá cho thuê theo mong muốn của bạn. Giá đề xuất của CarLease: được
      định vị thấp hơn 20% so với giá thuê xe bình quân trên thị trường. Mức giá
      này được tiến hành khảo sát hàng tháng bởi bộ phận phát triển thị trường
      của CarLease đối với từng dòng xe khác nhau. Chủ xe có thể tham khảo mức
      giá thuê của các dòng xe tương ứng trên CarLease hoặc liên hệ bộ phận Chăm
      sóc khách hàng để được hỗ trợ tư vấn mức thue xe hợp lí nhất. Chính sách
      thanh toán Hiện tại CarLease đã phát triển ví điện tử CarLease để khách
      thuê tiến hành đặt cọc nhằm xác nhận chắc chắn nhu cầu thuê xe. Số tiền
      đặt cọc là 30% của đơn giá thuê. Vì vậy sau khi tiến hành đặt xe, khách
      thuê sẽ nhận được thông báo yêu cầu rõ ràng về số tiền cần đặt cọc và thời
      gian cần hoàn tất đặt cọc. Đây là nghĩa vụ của khách thuê, và cuốc xe chỉ
      được đặt thành công khi khách thuê đã thực hiện đặt cọc đầy đủ trong thời
      gian CarLease quy định. Chính sách thời gian giao nhận Thời gian thuê xe
      mặc định trong hệ thống được thiết lập từ 21h đến 20h ngày kế tiếp (được
      tính 1 ngày) Tuy nhiên khách thuê có thể điều chỉnh thời gian nhận và trả
      xe linh hoạt theo ý của mình, nếu quá 24 tiếng thì khách thuê sẽ phải trả
      phí cho 2 ngày. Do đó, khách thuê cần cân nhắc kỹ thời gian đặt xe để sử
      dụng có hiệu quả và tiết kiệm. Chính sách kết thúc sớm chuyến đi Trong
      trường hợp khách thuê muốn kết thúc sớm chuyến đi của mình khi chưa đến
      thời hạn trả xe, để có thể được hoàn lại tiền cho thời gian chưa sử dụng,
      khách thuê nên trao đổi trước với chủ xe và cần phải nhận được sự đồng ý
      từ phía chủ xe. Số tiền được hoàn lại sẽ do bạn và chủ xe tự thỏa thuận
      với nhau.
    </Text>
  );
};

const Privacy = () => {
  return (
    <View style={STYLE.container}>
      <Header title="Điều khoản sử dụng" back />
      <ScrollView>
        <View style={styles.main}>
          <PrivacyPolicy />
        </View>
      </ScrollView>
    </View>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  main: {
    margin: 20,
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 8,
  },
});
