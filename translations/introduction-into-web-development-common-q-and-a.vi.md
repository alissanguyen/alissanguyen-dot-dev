# Title: Phát Triển Web: Cách Trình duyệt Web Hoạt Động
## Language: Tiếng Việt (Vietnamese)

### Translator Contact Information
- Name: Aki Hakune
- Email: akihakune@gmail.com
- Social Media Account to Contact: https://twitter.com/akihakune

### Translation
Hiểu cách thức mà Internet hoạt động là một điều quan trọng để phát triển những thực hành về phát triển web của bạn và xóa bỏ sự hoang mang và thắc mắc chưa được giải đáp. Bài đăng này không phải một hướng dẫn hay một giải thích hoàn chỉnh về cách thức mạng toàn cầu hoạt động mà là một bức tranh tổng thể về hệ sinh thái web.

# Giới thiệu về Internet
Ngắn gọn, Internet là một mạng lưới toàn cầu của các máy tính tương tác lẫn nhau. Được phát minh vào năm 1969 nhưng tới tận những năm 1990 và 2000 nó mới được sử dụng rộng rãi với mục đích thương mại.

Mạng Internet là phi tập trung, khiến việc đánh sập nó tuyệt đối trở nên bất khả thi, nhưng điều đó cũng đi cùng một vài điểm bất cập.

**Đọc thêm về: [Lịch sử của Internet](https://www.webfx.com/blog/web-design/the-history-of-the-internet-in-a-nutshell/)**

# Kết nối máy tính và viễn thông
Máy tính nhận dạng và kết nối với nhau sử dụng địa chỉ **giao thức Internet** (Internet Protocol - IP), tưởng tượng máy tính là một căn nhà với một địa chỉ IP là địa chỉ nhà đó. **Giao thức Internet** là những tiêu chuẩn được chấp thuận về cách kết nối giữa các máy tính. HTTP là một ví dụ về giao thức Internet, nhưng cũng có nhiều cái khác như WebSockets và RPC và gRPC.

Địa chỉ IP, về mặt bản chất, chỉ là một tổ hợp từ những con số và chữ. Một ví dụ về địa chỉ IP IPv4 là `23.141.221.14` và một địa chỉ IP IPv6 là `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.

Nếu bạn đang thắc mắc sự khác biệt nằm ở đâu, thì IPv4 không có đủ số để nhận diện mọi thiết bị kết nối Internet trên toàn cầu, nên IPv6 đã được tạo ra để khắc phục vấn đề đó, cũng là lý do vì sao nó dài hơn và chứa cả kí tự trong bảng chữ cái.

**Đọc thêm về: [IPv4 vs IPv6](https://cybernews.com/what-is-vpn/ipv4-vs-ipv6/)**

## Được rồi, vậy chúng "nói chuyện" như thế nào?
Máy tính "nói" bằng cách gửi đi dữ liệu theo từng phần **có thể xử lý được**, gọi là các **gói**. Khi máy tính nói chuyện với nhau, đôi khi thông điệp chúng gửi đi rất lớn (ví dụ, một video). Trong những trường hợp đó, toàn bộ dữ liệu tạo nên một video không thể được chuyển đi vào cùng một thời điểm về mặt vật lý. Do đó, những người vô cùng thông minh đã nghĩ ra ý tưởng tách dữ liệu thành những đơn vị nhỏ hơn gọi là **gói**. Rất nhiều công sức đã được bỏ ra để tối ưu hóa độ lớn của từng gói dữ liệu. Nhiều năm trước, khi tốc độ Internet còn chậm hơn rất nhiều, các gói dữ liệu được giữ tương đối nhỏ. Thế nhưng những phát minh mới đã cho phép các gói dữ liệu chứa được nhiều thông tin hơn.

Một gói dữ liệu bao gồm hai phần: phần **tiêu đề** (header) với thông tin về đích đến, nội dung, nguồn gốc,... của gói dữ liệu, và dữ liệu thực sự (được biết đến như **payload**).

**Đọc thêm về: [Gói dữ liệu trong mạng máy tính là gì?](https://www.liveaction.com/resources/blog/network-packet/)**

# Mạng toàn cầu World Wide Web
Sự phát minh ra **World Wide Web** thường được gắn liền với Tim Berners-Lee vào năm 1990 người đã tạo ra những thành tố cho sự liên lạc xuyên máy tính: giao thức HTTP, HTML, và khái niệm về **trình duyệt** và **máy chủ**. Ông cũng tạo ra **tổ chức mạng toàn cầu** (World Wide Web Consortium - W3C) vào năm 1994 và nó đã được công nhận là tổ chức quốc tế chính thức chuẩn hóa cho mạng toàn cầu. Bạn có thể tham khảo trang web của W3C ở [đây](https://www.w3.org/).

## Tóm lược về hệ thống tên miền
**Hệ thống tên miền** (Domain Name System - DNS) là một phương thức để dịch những tên trang web thân thiện với người dùng, như `www.alissanguyen.dev`, sang dạng mà máy tính có thể hiểu được là địa chỉ IPv4 hay IPv6. Khi tên của một trang web được chuyển thành một địa chỉ IP, nó được gọi là một **tra cứu DNS** (DNS lookup). Bạn có thể đọc thêm về DNS và cách nó hoạt động ở [đây](https://www.alissanguyen.dev/blog/domain-name-system-dns-and-how-it-works).

# Trình duyệt web và cách hoạt động của nó
Trình duyệt web là một phần mềm cho phép người dùng tải và xem nội dung của một trang web như văn bản, hình ảnh, video,... Trình duyệt web xử lý tất cả những phần phức tạp của Internet cho bạn. Nó xử lý **tra cứu DNS**, gửi yêu cầu **HTTP** và nhận phản hồi **HTTP**, xử lý các **gói dữ liệu**, chuyển **HTML** thành tài liệu, tải ảnh, chương trình, và stylesheet để khiến trải nghiệm trở nên động và thú vị về mặt hình ảnh. Theo thứ tự thời gian, trình duyệt nổi tiếng đầu tiên là **Netscape**, rồi tới **Internet Explorer**, **Firefox**, **Safari**, và **Chrome**.

**Đọc thêm về: [Trình duyệt web là gì?](https://www.mozilla.org/en-US/firefox/browsers/what-is-a-browser/)**

##### Trình duyệt web hoạt động như thế nào?
Trình duyệt web được cho là những phần mềm phức tạp nhất từng tồn tại bởi toàn bộ những sự phức tạp nó xử lý. Google Chrome được tạo ra bởi ít nhất 25 triệu dòng code. Nhưng nhìn chung, khi nhập địa chỉ vào thanh tìm kiếm trong trình duyệt, trình duyệt sẽ thực hiện các bước sau:
1. Một **tra cứu DNS** để dịch URL bạn nhập vào thành **địa chỉ IP** của máy chủ của trang web đó
2. Trình duyệt sau đó gửi một **yêu cầu HTTP** tới **máy chủ** của trang web, yêu cầu một bản sao của trang web đó từ máy chủ mà có thể gửi về người dùng (bạn)
3. Máy chủ xử lý yêu cầu trên từ trình duyệt và gửi lại các tệp theo từng nhóm (**gói dữ liệu**, như được định nghĩa ở trên)
4. Trình duyệt nhận các gói dữ liệu đó và bắt đầu xây dựng nên trang web mà sẽ được hiển thị cho bạn

**Đọc thêm về: [Cách trình duyệt hoạt động](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)**

##### Yêu cầu HTTP là gì?
**Giao thức truyền tải siêu văn bản** (Hypertext Transfer Protocol - HTTP) là một giao thức liên lạc cấp ứng dụng được sử dụng để tải các trang web dưới dạng siêu văn bản. Thông thường, một yêu cầu HTTP bao gồm: phiên bản HTTP, URL của trang web, phương thức HTTP, tiêu đề của yêu cầu HTTP, và nội dung HTTP (không bắt buộc).

##### Làm cách nào trình duyệt chuyển HTML thành thứ bạn thấy?
Trình duyệt sẽ đọc qua phần HTML nó nhận được và, thông qua một loạt các quy tắc, sẽ chuyển hóa thành ảnh, văn bản, và các chương trình động. Trình duyệt cũng có thể đọc một ngôn ngữ khác gọi là Cascading Style Sheets (**CSS**) có thể điểu khiển cách các phần của trang web được biểu diễn.

Bạn có thể đọc thêm về cách trình duyệt biểu diễn các trang web với engine dựng hình [tại đây](https://www.browserstack.com/guide/browser-rendering-engine).

##### Lưu trữ và triển khai web
**Tên miền web** hay **tên miền** cơ bản chỉ là những chuỗi kí tự liên kết tới địa chỉ IP và được sử dụng để truy cập trang web từ phía người dùng. Nhưng không phải ai cũng có thể đặt tên một trang web là, ví dụ "google.com", và trỏ nó tới địa chỉ của họ. Có rất nhiều sự phức tạp đằng sau cách ngăn chặn điều đó, nhưng nói chung là bởi không có cách nào bạn có thể thuyết phục một máy chủ DNS rằng "google.com" nên trỏ tới địa chỉ IP của bạn. Các máy chủ DNS tin vào ICANN, tổ chức kiểm soát sự phân chia các tên miền, nên để khiến tạo một trang web với tên miền riêng, bạn sẽ phải đăng kí nó với các công ty đăng kí tên miền như **Namecheap** hay **Google Domains**.

![](https://www.alissanguyen.dev/blog/a-beginners-introduction-to-domain-names)

**Web hosting** là một dịch vụ cung cấp khả năng đăng một trang web hay một ứng dụng web lên Internet.

![](https://www.alissanguyen.dev/blog/introduction-to-web-hosting)

##### Kết luận
Chắc chắn rằng, Internet rất phức tạp và nếu bạn muốn học phát triển web bạn có thể sẽ rơi vào cái bẫy của việc học bất cứ chủ đề nào nêu trên. Nhưng bạn không cần phải biết tất cả. Một nhà phát triển web nên biết đủ nhiều về HTML, CSS và Javascript nhưng việc có một hiểu biết tổng quát về các công nghệ liên quan trong cách thức vận hành của Internet là vô cùng hữu dụng.