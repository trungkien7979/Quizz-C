/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Question } from "../types";

export const BATCH4_QUESTIONS: Question[] = [
  {
    id: "q76",
    category: Category.OPERATORS,
    questionText: "Trong C++, có 5 toán tử tuyệt đối KHÔNG ĐƯỢC PHÉP nạp chồng (overload). Đó là những toán tử nào dưới đây?",
    codeSnippet: `// Danh sách toán tử bị cấm nạp chồng`,
    options: [
      { key: "A", text: "Toán tử chia (/), gán (=), so sánh bằng (==), cộng (+), trừ (-)" },
      { key: "B", text: "Toán tử truy xuất thành viên (.), truy xuất con trỏ thành viên (.*), định phạm vi (::), điều kiện ba ngôi (?:), và toán tử đo kích thước (sizeof)" },
      { key: "C", text: "Toán tử dịch bit (<<), dịch bit ngược (>>), ngoặc vuông ([]), ngoặc tròn (()), con trỏ (->)" },
      { key: "D", text: "Toán tử new, delete, new[], delete[], so sánh lớn hơn (>)" }
    ],
    correctAnswer: "B",
    explanation: "C++ nghiêm cấm việc nạp chồng 5 toán tử: toán tử chấm truy xuất thành viên `.`, toán tử con trỏ truy xuất thành viên `.*`, toán tử phân giải phạm vi `::`, toán tử điều kiện ba ngôi `?:`, và toán tử lấy kích thước `sizeof`. Lý do là để bảo vệ tính nhất quán ngữ nghĩa căn bản của trình biên dịch.",
    difficulty: "Khó"
  },
  {
    id: "q77",
    category: Category.OPERATORS,
    questionText: "Làm thế nào để trình biên dịch C++ phân biệt được khi bạn nạp chồng toán tử Tăng tiền tố (++obj) và Tăng hậu tố (obj++)?",
    codeSnippet: `class Counter {
public:
    Counter& operator++();    // Tiền tố hay hậu tố?
    Counter operator++(int);  // Tiền tố hay hậu tố?
};`,
    options: [
      { key: "A", text: "Dựa vào kiểu dữ liệu trả về của hàm." },
      { key: "B", text: "Toán tử hậu tố bắt buộc phải nhận thêm một tham số giả định (dummy parameter) kiểu 'int' trong khai báo." },
      { key: "C", text: "Không thể phân biệt được, trình biên dịch sẽ sinh cảnh báo báo lỗi và chọn ngẫu nhiên." },
      { key: "D", text: "Dựa vào việc có từ khóa friend đứng trước hay không." }
    ],
    correctAnswer: "B",
    explanation: "Đây là giải pháp quy ước của người sáng tạo C++: Để phân biệt hai hàm có cùng tên `operator++`, hàm tăng tiền tố `++obj` không nhận tham số (`operator++()`), còn hàm tăng hậu tố `obj++` nhận thêm một biến giả định kiểu `int` (`operator++(int)`). Biến `int` này chỉ đóng vai trò phân biệt chữ ký hàm chứ không có giá trị truyền trị thực tế.",
    difficulty: "Khó"
  },
  {
    id: "q78",
    category: Category.OPERATORS,
    questionText: "Khi nạp chồng toán tử hai ngôi dưới dạng một Phương thức thành viên (member function) phi tĩnh của lớp, nó nhận bao nhiêu tham số truyền vào tường minh?",
    codeSnippet: `class Complex {
public:
    Complex operator+(const Complex& other); // Toán tử hai ngôi
};`,
    options: [
      { key: "A", text: "Nhận đủ 2 tham số tường minh." },
      { key: "B", text: "Nhận duy nhất 1 tham số tường minh (tham số còn lại chính là đối tượng gọi hàm thông qua con trỏ 'this' ẩn)." },
      { key: "C", text: "Không nhận tham số nào." },
      { key: "D", text: "Nhận 3 tham số cả con trỏ ảo." }
    ],
    correctAnswer: "B",
    explanation: "Vì phương thức thành viên có con trỏ `this` đại diện cho toán hạng bên vế trái (vế gọi toán tử), ta chỉ cần truyền tường minh 1 tham số đại diện cho toán hạng bên vế phải. Do đó hàm chỉ nhận đúng 1 tham số nhận diện.",
    difficulty: "Dễ"
  },
  {
    id: "q79",
    category: Category.OPERATORS,
    questionText: "Trong trường hợp nào ta BẮT BUỘC phải nạp chồng toán tử hai ngôi dưới dạng Hàm tự do (thường là Hàm bạn friend) thay vì phương thức thành viên của lớp?",
    codeSnippet: `Fraction f(1, 2);
Fraction f2 = 2 + f; // Phép tính 2 + f`,
    options: [
      { key: "A", text: "Khi biểu thức tính toán muốn tối ưu tốc độ xử lý phần cứng." },
      { key: "B", text: "Khi toán hạng bên tay trái của biểu thức không phải là đối tượng của lớp ta thiết kế (ví dụ số nguyên nguyên thủy, luồng ostream, v.v.)." },
      { key: "C", text: "Khi toán tử đó có độ ưu tiên tính toán thấp nhất." },
      { key: "D", text: "Không bao giờ bắt buộc, cả hai cách luôn tương đương nhau." }
    ],
    correctAnswer: "B",
    explanation: "Nếu toán hạng bên trái không phải là lớp của ta (ví dụ phép tính hằng số đứng trước `2 + f` hoặc in luồng `cout << f`), trình biên dịch không thể gọi phương thức thành viên của lớp. Ta bắt buộc phải khai báo hàm tự do nhận hai đối số, thường cho làm hàm bạn `friend` để thọc sâu lấy dữ liệu private của lớp.",
    difficulty: "Trung bình"
  },
  {
    id: "q80",
    category: Category.ADVANCED,
    questionText: "Nếu lớp A được khai báo là bạn (friend class) của lớp B, điều này mang lại đặc quyền gì cho quan hệ hai lớp?",
    codeSnippet: `class B {
    friend class A; // A là bạn của B
};`,
    options: [
      { key: "A", text: "Mọi phương thức của lớp B có quyền truy xuất biến private của A." },
      { key: "B", text: "Mọi phương thức của lớp A đều có quyền thâm nhập và truy xuất vào toàn bộ thành viên private lẫn protected của lớp B." },
      { key: "C", text: "Cả hai lớp tự động trộn lẫn mã nguồn chung với nhau." },
      { key: "D", text: "Lớp A tự động trở thành lớp con kế thừa từ B." }
    ],
    correctAnswer: "B",
    explanation: "Khi lớp B coi A là bạn (`friend class A;`), B mở toang cánh cửa đóng gói cho bạn của nó. Mọi hàm thành viên thuộc lớp A có thể trích xuất và chỉnh sửa biến private/protected của B một cách tự do. Chú ý: Tình bạn này chỉ có tính chất 1 chiều (B coi A là bạn không có nghĩa A coi B là bạn) và không có tính bắc cầu.",
    difficulty: "Trung bình"
  },
  {
    id: "q81",
    category: Category.ADVANCED,
    questionText: "Nhận định nào sau đây là chi tiết phản ánh ĐÚNG tính chất của mối quan hệ Bạn bè (Friendship) trong C++?",
    codeSnippet: `// Tính chất của quan hệ friend trong OOP`,
    options: [
      { key: "A", text: "Tính bạn có thể được kế thừa tự động (con của bạn cũng là bạn của ta)." },
      { key: "B", text: "Tính bạn có tính chất hai chiều tự động (A là bạn B thì B cũng mặc định là bạn A)." },
      { key: "C", text: "Tính bạn KHÔNG có tính hai chiều tự động, KHÔNG có tính kế thừa tự động và KHÔNG có tính chất bắc cầu." },
      { key: "D", text: "Tính chất bạn bè giúp chương trình hoạt động đa hình mạnh hơn." }
    ],
    correctAnswer: "C",
    explanation: "Trong C++, tình bạn là hoàn toàn ích kỷ và riêng biệt: (1) Không bắc cầu: Nếu A bạn B, B bạn C thì A chưa chắc bạn C; (2) Không hai chiều: B cho A làm bạn nhưng A có thể đóng kín với B; (3) Không kế thừa: lớp Cha là bạn của một lớp ngoài thì lớp Con chưa chắc đã được coi là bạn.",
    difficulty: "Khó"
  },
  {
    id: "q82",
    category: Category.OPERATORS,
    questionText: "Nạp chồng toán tử gọi hàm 'operator()' cho phép đối tượng hoạt động giống hệt một hàm. Đối tượng có đặc tính đặc thù này gọi là gì?",
    codeSnippet: `class Adder {
public:
    int operator()(int a, int b) { return a + b; }
};
// Adder add; int sum = add(5, 10);`,
    options: [
      { key: "A", text: "Lambda Object" },
      { key: "B", text: "Functor (hoặc Function Object)" },
      { key: "C", text: "Virtual Function Reference" },
      { key: "D", text: "Static Class Wrapper" }
    ],
    correctAnswer: "B",
    explanation: "Một đối tượng hỗ trợ nạp chồng toán tử mở đóng ngoặc tròn `operator()` được gọi là Functor (đối tượng hàm). Nó có ưu thế lưu trữ trạng thái cục bộ rất giá trị so với các con trỏ hàm truyền thống và được sử dụng rộng rãi trong thư viện chuẩn STL (như trong thuật toán `std::sort`).",
    difficulty: "Khó"
  },
  {
    id: "q83",
    category: Category.ADVANCED,
    questionText: "Nhận định nào sau đây là CHÍNH XÁC nhất về việc viết hàm ảo ảo thành viên (virtual function) kết hợp với Khuôn mẫu (Template)?",
    codeSnippet: `class Base {
public:
    template <typename T>
    virtual void process(T val) {} // Hợp lệ không?
};`,
    options: [
      { key: "A", text: "Hoàn toàn hợp lệ, trình biên dịch tự động tối ưu hóa bộ mã ảo." },
      { key: "B", text: "KHÔNG HỢP LỆ. Một phương thức thành viên của lớp không thể vừa là hàm ảo (virtual) vừa là một mẫu khuôn hàm (member template function)." },
      { key: "C", text: "Chỉ được phép nếu lớp đó là lớp static thuần khiết." },
      { key: "D", text: "Chỉ cho phép nếu kiểu T là số nguyên." }
    ],
    correctAnswer: "B",
    explanation: "Đây là một quy chuẩn thiết kế kĩ thuật C++: Kích thước của bảng phương thức ảo (vtable) cần cố định sau khi biên dịch lớp. Nếu cho phép một hàm ảo có cấu trúc Template, trình biên dịch không cách nào biết trước có bao nhiêu hiện thực hóa của T sẽ được gọi ở runtime để phân bổ không gian vtable tương quan. Do đó, 'member function template' không thể là virtual.",
    difficulty: "Khó"
  },
  {
    id: "q84",
    category: Category.ADVANCED,
    questionText: "Khái niệm 'Đặc biệt hóa khuôn mẫu' (Template Specialization) trong C++ dùng để làm gì?",
    codeSnippet: `template <typename T> class Container {};
template <> class Container<bool> {}; // Cú pháp gì?`,
    options: [
      { key: "A", text: "Để tăng tốc độ cho toàn bộ các kiểu dữ liệu lớp." },
      { key: "B", text: "Để định nghĩa một lớp hoặc một hàm hoạt động có logic chuyên biệt, tối ưu riêng cho một kiểu dữ liệu cụ thể (ví dụ cụ thể hóa riêng cho kiểu bool để tiết kiệm RAM)." },
      { key: "C", text: "Để tắt tính năng gỡ lỗi của Templates." },
      { key: "D", text: "Để kết hợp đa hình động con trỏ." }
    ],
    correctAnswer: "B",
    explanation: "Đặc biệt hóa khuôn mẫu cho phép lớp/hàm template có hành xử chuyên biệt cho một kiểu cụ thể. Vì kiểu `bool` thông thường tốn 1 byte mặc dù chỉ lưu 0/1, STL nạp phiên bản đặc biệt hóa `std::vector<bool>` nén 8 giá trị dạng bit vào 1 byte để tiết kiệm tối đa dung lượng bộ nhớ.",
    difficulty: "Trung bình"
  },
  {
    id: "q85",
    category: Category.ADVANCED,
    questionText: "Trong cơ chế xử lý ngoại lệ (Exception Handling) của C++, quá trình tự động gọi Hàm hủy (Destructor) để dọn dẹp tất cả các đối tượng cục bộ trên Stack khi có lỗi ném ra gọi là gì?",
    codeSnippet: `// Cơ chế tự động dọn RAM khi throw ngoại lệ`,
    options: [
      { key: "A", text: "Stack Unwinding (Thu hồi ngăn xếp)" },
      { key: "B", text: "Garbage Collection" },
      { key: "C", text: "Memory Fragmentation" },
      { key: "D", text: "Resource Isolation" }
    ],
    correctAnswer: "A",
    explanation: "Khi một ngoại lệ được ném ra bằng `throw`, chương trình thoát gấp khỏi phạm vi thực thi cục bộ cũ để tìm kiếm khối `catch` phù hợp. C++ cam kết bảo mật bộ nhớ bằng cách kích hoạt đầy đủ hàm hủy của mọi đối tượng cục bộ nằm dọc trên phân vùng Stack bị quét qua. Cơ chế an toàn tuyệt hảo này gọi là Tháo gỡ/Thu hồi ngăn xếp (Stack Unwinding).",
    difficulty: "Khó"
  },
  {
    id: "q86",
    category: Category.ADVANCED,
    questionText: "Triết lý lập trình RAII viết tắt của cụm từ 'Resource Acquisition Is Initialization' trong C++ khuyên ta điều gì?",
    codeSnippet: `// Triết lý quản lý tài nguyên an toàn`,
    options: [
      { key: "A", text: "Bất cứ lúc nào sử dụng biến tĩnh cũng cần gán giá trị 0." },
      { key: "B", text: "Nên bọc các tài nguyên hệ thống (vùng nhớ động, file, socket) vào các đối tượng cục bộ trên Stack, để Constructor lo việc mở/cấp phát và Destructor lo việc thu hồi hoàn trả tự động." },
      { key: "C", text: "Nên sử dụng hoàn toàn con trỏ thô thay thế cho hằng số." },
      { key: "D", text: "Chỉ viết lệnh gán trong Constructor của lớp con." }
    ],
    correctAnswer: "B",
    explanation: "RAII là xương sống của quản lý bộ nhớ C++ hiện đại. Thân dọn dẹp Destructor tự động chạy khi đối tượng Stack biến mất khỏi tầm nhìn. Thiết kế bao đóng tài nguyên vào lòng Class giúp loại bỏ 100% thảm họa rò rỉ kể cả khi có lỗi chen ngang phát sinh throw thoát luồng.",
    difficulty: "Trung bình"
  },
  {
    id: "q87",
    category: Category.ADVANCED,
    questionText: "Tại sao trong cấu trúc khối 'catch' ngoại lệ, ta luôn nên bắt Exception dạng Tham chiếu hằng (const Reference) thay vì bắt dạng Giá trị (by Value)?",
    codeSnippet: `try { // ... } 
catch (const std::exception& e) { // Tại sao dùng &?
    cout << e.what(); 
}`,
    options: [
      { key: "A", text: "Chỉ có bắt tham chiếu thì chương trình mới chạy được." },
      { key: "B", text: "Để tránh hiện tượng Thác đối tượng (Object Slicing) gọt mất thông tin kiểu con của lỗi, đồng thời loại bỏ chi phí sao chép đối tượng exception phức tạp." },
      { key: "C", text: "Tiết kiệm 4 byte biến ảo." },
      { key: "D", text: "Cho phép sửa lỗi nội dung thông báo ngay khi in." }
    ],
    correctAnswer: "B",
    explanation: "Exception trong C++ cũng có cấu trúc phân tầng kế thừa. Bắt exception theo trị `catch (std::exception e)` sẽ kích hoạt thảm họa Object Slicing gọt sạch thông tin và thuộc tính đặc chủng của lớp lỗi con (như `std::runtime_error`), đồng thời tiêu tốn hiệu năng sao chép. Bắt theo tham chiếu `const std::exception& e` bảo tồn đa hình của thông điệp lỗi dạng ảo `.what()`.",
    difficulty: "Khó"
  },
  {
    id: "q88",
    category: Category.ADVANCED,
    questionText: "Làm thế nào để chuyển tiếp (rethrow) ngoại lệ hiện tại từ trong khối catch này ra ngoài cho mức kiểm soát cao hơn xử lý?",
    codeSnippet: `catch (const std::exception& e) {
    // Code dọn dẹp cục bộ
    [Lệnh chuyển tiếp ngoại lệ?] 
}`,
    options: [
      { key: "A", text: "throw new exception();" },
      { key: "B", text: "throw e;" },
      { key: "C", text: "throw;" },
      { key: "D", text: "return e;" }
    ],
    correctAnswer: "C",
    explanation: "Sử dụng từ khóa hụt `throw;` không đi kèm đối số ngay trong khối catch sẽ ra hiệu cho C++ ném tiếp chính xác đối tượng exception hiện tại đang giữ đi tiếp lên mức kiểm soát cao hơn. Sử dụng `throw e;` cũng ném được nhưng gây rủi ro xảy ra Object Slicing đối với lỗi.",
    difficulty: "Khó"
  },
  {
    id: "q89",
    category: Category.ADVANCED,
    questionText: "Trong C++11, từ khóa ngữ cảnh 'noexcept' đặt sau một phương thức hứa hẹn điều gì?",
    codeSnippet: `void doWork() noexcept { // noexcept làm gì? }`,
    options: [
      { key: "A", text: "Hứa hẹn hàm này không nhận tham số rác." },
      { key: "B", text: "Cam kết bảo đảm hàm này tuyệt đối không phát sinh hoặc ném ra bất kỳ ngoại lệ nào, giúp trình biên dịch tối ưu hóa tốc độ mã máy cực đại." },
      { key: "C", text: "Hàm này không được sử dụng con trỏ tĩnh." },
      { key: "D", text: "Không có từ khóa noexcept trong C++." }
    ],
    correctAnswer: "B",
    explanation: "Từ khóa `noexcept` đóng vai trò là hợp đồng bảo chứng của lập trình viên với trình biên dịch rằng hàm này an toàn tuyệt đối không bao giờ ném lỗi. Nhờ đó, trình biên dịch có thể loại bỏ hoàn toàn các đoạn mã dọn dẹp Stack phức tạp liên đới nhằm nâng cao tối đa tốc độ vận hành.",
    difficulty: "Trung bình"
  },
  {
    id: "q90",
    category: Category.ADVANCED,
    questionText: "Ngoại lệ nào sau đây tự động phát sinh khi toán tử khởi tạo bộ nhớ động 'new' thất bại do hệ thống cạn kiệt tài nguyên RAM?",
    codeSnippet: `int* arr = new int[999999999999]; // Nếu hết RAM?`,
    options: [
      { key: "A", text: "std::runtime_error" },
      { key: "B", text: "std::bad_alloc" },
      { key: "C", text: "std::invalid_argument" },
      { key: "D", text: "std::out_of_range" }
    ],
    correctAnswer: "B",
    explanation: "Khi hệ thống trích xuất RAM không đủ cấp phát cho toán tử `new`, hệ thống sinh lỗi C++ sẽ tự động ném ra một Exception mang kiểu `std::bad_alloc` thuộc thư viện `<new>`.",
    difficulty: "Dễ"
  },
  {
    id: "q91",
    category: Category.OPERATORS,
    questionText: "Khi nạp chồng toán tử chỉ số mảng [], hành vi chuẩn mực là ta nên định nghĩa bao nhiêu phiên bản phương thức trong lớp?",
    codeSnippet: `class Array {
    int data[10];
public:
    // Nên định nghĩa mấy phiên bản?
};`,
    options: [
      { key: "A", text: "Chỉ cần 1 phiên bản duy nhất nhận mọi đối số." },
      { key: "B", text: "Nên định nghĩa song song hai phiên bản: một phiên bản thường để đọc ghi giá trị, và một phiên bản kết thúc const để bảo vệ đọc thông tin của hằng đối tượng." },
      { key: "C", text: "Không được phép nạp chồng toán tử mảng." },
      { key: "D", text: "Chỉ viết phiên bản tĩnh." }
    ],
    correctAnswer: "B",
    explanation: "Để thiết kế một chiếc mảng an toàn chuẩn mực, ta cần quá tải 2 hàm: (1) `int& operator[](int idx);` cho phép ghi nhận sửa trị ngoài; (2) `const int& operator[](int idx) const;` chỉ hỗ trợ đọc an toàn của thực thể hằng.",
    difficulty: "Khó"
  },
  {
    id: "q92",
    category: Category.ADVANCED,
    questionText: "Tại sao trong danh sách tham số khuôn mẫu, hai từ khóa 'typename' và 'class' đa phần được coi là tương đương?",
    codeSnippet: `template <class T> void show1();
template <typename T> void show2();`,
    options: [
      { key: "A", text: "Do lỗi thiết kế của ban phát triển C++ những năm đầu." },
      { key: "B", text: "Vì về mặt cú pháp biên dịch cơ bản trong khai báo hằng tham số hóa, cả hai đều chỉ thị kiểu dữ liệu tổng quát cho vai trò T hoạt động." },
      { key: "C", text: "Một từ viết cho class, một từ viết cho biến thường." },
      { key: "D", text: "Cả hai đều bị loại bỏ ở C++20." }
    ],
    correctAnswer: "B",
    explanation: "Khi đứng trong dấu ngoặc nhọn khai báo tham số hóa Template `<typename T>` hay `<class T>`, cả hai từ khóa hoàn toàn đại diện bình đẳng cho một kiểu dữ liệu tổng quát T. Sự phân tách độc nhất xảy ra khi xử lý các kiểu phụ thuộc phụ thuộc phụ thuộc (dependent nested types) ở cấu trúc phức tạp thì bắt buộc viết `typename`.",
    difficulty: "Trung bình"
  },
  {
    id: "q93",
    category: Category.ADVANCED,
    questionText: "Đối tượng thông báo lỗi nào ném ra từ thư viện STL khi ta cố ý truy cập và đọc chỉ số mảng vector vượt quá giới hạn bằng phương thức '.at(index)'?",
    codeSnippet: `vector<int> v = {1, 2};
v.at(5); // Ném ra ngoại lệ gì?`,
    options: [
      { key: "A", text: "std::invalid_argument" },
      { key: "B", text: "std::out_of_range" },
      { key: "C", text: "std::bad_cast" },
      { key: "D", text: "std::overflow_error" }
    ],
    correctAnswer: "B",
    explanation: "Không giống như việc gọi bằng ngoặc vuông `v[5]` (không kiểm thử hiệu năng giới hạn nhằm tăng tốc độ), phương thức `v.at(5)` tiến hành kiểm tra kích thước biên mảng và lập tức ném lỗi ngoại lệ kiểu `std::out_of_range` bảo vệ ứng dụng.",
    difficulty: "Dễ"
  },
  {
    id: "q94",
    category: Category.OPERATORS,
    questionText: "Để nạp chồng toán tử dịch luồng đầu vào (>>), ostream hay istream sẽ đóng vai trò kiểu luồng chính tại tham số?",
    codeSnippet: `friend [Kiểu luồng?] operator>>([Kiểu luồng?]& in, Fraction& f);`,
    options: [
      { key: "A", text: "ostream" },
      { key: "B", text: "istream" },
      { key: "C", text: "ifstream" },
      { key: "D", text: "iostream" }
    ],
    correctAnswer: "B",
    explanation: "Toán tử dịch luồng nhập dữ liệu `>>` nhận luồng nhập chuẩn đầu vào (`std::istream` đại diện là bàn phím cin) để phân tích gán trị, do vậy `istream&` đóng vai trò là kiểu chủ lực.",
    difficulty: "Dễ"
  },
  {
    id: "q95",
    category: Category.BASICS,
    questionText: "C++ hỗ trợ tính năng cho phép định nghĩa các lớp con nằm trọn hoàn toàn bên trong thân khai báo của một lớp khác để tăng cường đóng gói bảo mật. Cấu trúc này gọi là gì?",
    codeSnippet: `class Outer {
    class Inner {}; // Cấu trúc gì?
};`,
    options: [
      { key: "A", text: "Nested Class (Lớp lồng nhau)" },
      { key: "B", text: "Friend Class" },
      { key: "C", text: "Virtual Base Class" },
      { key: "D", text: "Global Class Reference" }
    ],
    correctAnswer: "A",
    explanation: "Nested Class (Lớp lồng nhau) là một kĩ thuật gói gọn mô hình thiết kế nhằm nâng cao tính bao kín của dữ liệu nội tại lớp, giúp lớp con chỉ được nhìn thấy hoặc phục dịch chặt chẽ đối tượng lớp cha bao bọc.",
    difficulty: "Trung bình"
  },
  {
    id: "q96",
    category: Category.ADVANCED,
    questionText: "Trong cơ chế đa bắt ngoại lệ, nếu một khối catch lớp lỗi cha gốc 'std::exception' được vô tình xếp đứng TRƯỚC khối catch lớp lỗi con cụ thể 'std::runtime_error', điều gì sẽ xảy ra?",
    codeSnippet: `try { // ... }
catch (std::exception& e) { // Đứng trước }
catch (std::runtime_error& re) { // Đứng sau }`,
    options: [
      { key: "A", text: "Mã vẫn biên dịch và lọc đúng các lỗi con bình thường." },
      { key: "B", text: "Lỗi biên dịch không cho phép chạy." },
      { key: "C", text: "Khối catch của std::runtime_error sẽ hoàn toàn vô dụng (unreachable code) vì mọi exception kể cả con đều đã bị chặn đứng và tóm gọn bởi khối exception cha trước đó." },
      { key: "D", text: "Chương trình sẽ tự bỏ qua khối exception cha." }
    ],
    correctAnswer: "C",
    explanation: "Trình biên dịch C++ duyệt các khối catch tuần tự từ trên xuống dưới và kích hoạt khối đầu tiên khớp kiểu dữ liệu. Vì lớp cha khớp được với tất cả lớp con của nó, khối catch cha chặn trên đầu sẽ hốt hết mọi lỗi, biến tất cả khối catch lỗi con chuyên biệt bên dưới thành mã vô dụng hoàn toàn. Do đó, nguyên tắc vàng là: CATCH LỖI CON TRƯỚC, LỖI CHA SAU.",
    difficulty: "Khó"
  },
  {
    id: "q97",
    category: Category.OPERATORS,
    questionText: "Nạp chồng toán tử trỏ thành viên (operator->) bắt buộc phải trả về kiểu dữ liệu nào để duy trì tính hoạt động chuỗi con trỏ?",
    codeSnippet: `// Trả về kiểu gì?`,
    options: [
      { key: "A", text: "Bắt buộc trả về một số nguyên chỉ số ô nhớ." },
      { key: "B", text: "Bắt buộc trả về một con trỏ thực thể đối tượng hoặc một đối tượng khác hỗ trợ toán tử -> tương thích." },
      { key: "C", text: "Trả về void." },
      { key: "D", text: "Chỉ được trả về biến const tĩnh." }
    ],
    correctAnswer: "B",
    explanation: "Toán tử mũi tên `->` có hành xử chuỗi đặc thù trong C++. Trình biên dịch sẽ liên tục gọi toán tử dịch chuyển này cho tới khi nhận về một con trỏ thô vật lý thực sự của đối tượng thì mới tiến hành giải địa chỉ gọi hàm. Do vậy và bắt buộc trả về một con trỏ đối tượng.",
    difficulty: "Khó"
  },
  {
    id: "q98",
    category: Category.ADVANCED,
    questionText: "Khi một Class Template được khởi tạo với nhiều kiểu T khác nhau ở mã nguồn thực tế, trình biên dịch C++ xử lý thế nào về số lượng lớp máy sinh ra?",
    codeSnippet: `vector<int> a;
vector<double> b;`,
    options: [
      { key: "A", text: "Chỉ sinh đúng một lớp duy nhất chạy chung." },
      { key: "B", text: "Tự động biên dịch sinh ra hai lớp nhị phân mã máy riêng lẻ hoàn toàn độc lập, hành vi này gọi là Template Instantiation (Hiện thực hóa khuôn mẫu)." },
      { key: "C", text: "Lỗi runtime nếu các con trỏ trỏ chéo kiểu nhau." },
      { key: "D", text: "Cắt dung lượng file chạy đi gấp rưỡi." }
    ],
    correctAnswer: "B",
    explanation: "Templates trong C++ thực tế không phát sinh mã máy chạy cho tới khi lập trình viên thực sự gọi khởi tạo. Với mỗi tham số T khác biệt (`int`, `double`...), trình biên dịch sẽ nhân bản và xuất ra các lớp nhị phân mã nguồn thực tế riêng biệt để tối ưu tốc độ tối đa cho kiểu đó (Template Instantiation).",
    difficulty: "Trung bình"
  },
  {
    id: "q99",
    category: Category.BASICS,
    questionText: "Cho đoạn mã dưới. Thêm hằng tham số nguyên phi-kiểu (Non-type template parameters) vào khuôn mẫu giúp thực thi việc gì đặc sắc?",
    codeSnippet: `template <typename T, int Size>
class StaticArray {
    T data[Size]; // Size hằng ở compile-time
};`,
    options: [
      { key: "A", text: "Ngăn mảng không cho xóa phần tử." },
      { key: "B", text: "Cho phép truyền trực tiếp các giá trị hằng số cố định (như kích thước mảng statically allocated) làm tham số khuôn mẫu ngay tại thời điểm dịch." },
      { key: "C", text: "Cho phép mảng tự động phình to kích thước tại runtime." },
      { key: "D", text: "Biến toàn bộ mảng thành kiểu bool ảo." }
    ],
    correctAnswer: "B",
    explanation: "Templates không chỉ nhận tham số kiểu dữ liệu dạng `typename T`, mà còn nhận được cả các tham số phi kiểu hằng nguyên thủy (Non-type template parameters) như số nguyên `int Size`. Điều này hỗ trợ khai tạo kiểu mảng tĩnh có kích duyệt xác thực cứng ngay compile-time đạt hiệu suất tuyệt đối.",
    difficulty: "Trung bình"
  },
  {
    id: "q100",
    category: Category.BASICS,
    questionText: "Tính chất kế thừa nào trong C++ cho phép lớp con kế thừa từ nhiều lớp cha khác nhau không cùng cây gia đình cùng lúc?",
    codeSnippet: `class Child : public ParentA, public ParentB {};`,
    options: [
      { key: "A", text: "Đơn kế thừa (Single Inheritance)" },
      { key: "B", text: "Đa hình cục bộ (Polymorphic binding)" },
      { key: "C", text: "Đa kế thừa (Multiple Inheritance)" },
      { key: "D", text: "Kế thừa đa cấp (Multilevel Inheritance)" }
    ],
    correctAnswer: "C",
    explanation: "C++ là một trong số ít ngôn ngữ OOP chính thống hỗ trợ cơ chế Đa kế thừa (Multiple Inheritance) trực diện, cho phép một lớp kế thừa trực tiếp từ 2 hay nhiều lớp cha độc lập nhằm tổng đính các tính năng phức tạp cùng lúc dẫu có rủi ro sự cố lỗi Kim Cương.",
    difficulty: "Dễ"
  }
];
