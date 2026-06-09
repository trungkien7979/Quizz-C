/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Question } from "../types";

export const BATCH7_QUESTIONS: Question[] = [
  {
    id: "q151",
    category: Category.OPERATORS,
    questionText: "Trong các toán tử dưới đây, những toán tử nào TUYỆT ĐỐI CẤM nạp chồng (overload) trong C++?",
    codeSnippet: `// Danh sách toán tử hệ thống`,
    options: [
      { key: "A", text: "Toán tử gán '=', toán tử cộng '+', toán tử tăng ++." },
      { key: "B", text: "Toán tử chấm '.', toán tử phạm vi '::', toán tử điều kiện loại ba '?:', toán tử kích thước 'sizeof', và toán tử lấy kiểu 'typeid'." },
      { key: "C", text: "Toán tử so sánh bằng '==', toán tử chia '/', toán tử lấy địa chỉ '&'." },
      { key: "D", text: "Tất cả các toán tử trong C++ đều có thể nạp chồng tự do." }
    ],
    correctAnswer: "B",
    explanation: "C++ quy định rất chặt chẽ để giữ nguyên cấu trúc ngữ nghĩa lõi của ngôn ngữ. Các toán tử như `.` (member access), `::` (scope resolution), `?:` (ternary conditional), `sizeof` (size of object) và `typeid` đòi hỏi tính xác định tĩnh cực kỳ cơ bản lúc biên dịch nên bị cấm nạp chồng hoàn toàn dưới mọi hình thức.",
    difficulty: "Trung bình"
  },
  {
    id: "q152",
    category: Category.OPERATORS,
    questionText: "Sự khác biệt cú pháp quan trọng nhất để trình biên dịch phân biệt giữa nạp chồng toán tử tiền tố ++ (pre-increment) và hậu tố ++ (post-increment) là gì?",
    codeSnippet: `class Counter {
public:
    Counter& operator++();    // Loại nào?
    Counter operator++(int);  // Loại nào?
};`,
    options: [
      { key: "A", text: "Hậu tố ++ có thêm từ khóa explicit." },
      { key: "B", text: "Tiền tố ++ phải nhận con trỏ rỗng nullptr." },
      { key: "C", text: "Nạp chồng toán tử hậu tố phải có thêm một tham số giả định kiểu integer kiểu 'int' không tên trong danh sách tham số để phân biệt chữ ký." },
      { key: "D", text: "Tiền tố ++ buộc phải ghi đè dạng friend." }
    ],
    correctAnswer: "C",
    explanation: "Để giải quyết sự đụng độ khi cùng chung một ký hiệu `operator++`, C++ đề xuất một mẹo ngữ pháp: hàm nạp chồng hậu tố sẽ nhận một tham số giả định kiểu `int` (`Counter operator++(int);`). Tham số này không có tên biến và không dùng để truyền dữ liệu gì cả, chỉ thuần túy làm mốc phân biệt chữ ký hàm (signature).",
    difficulty: "Khó"
  },
  {
    id: "q153",
    category: Category.OPERATORS,
    questionText: "Toán tử hậu tố ++ (x++) thường trả về giá trị thế nào so với toán tử tiền tố ++ (++x), ảnh hưởng trực tiếp đến hiệu năng hệ thống?",
    codeSnippet: `// So sánh hiệu năng ++ tiền tố và ++ hậu tố`,
    options: [
      { key: "A", text: "Hậu tố trả về tham chiếu trực tiếp nên chạy nhanh hơn gấp đôi." },
      { key: "B", text: "Tiền tố bắt buộc sinh đối tượng tạm nên tốn rất nhiều RAM." },
      { key: "C", text: "Tiền tố ++ tăng trực tiếp giá trị của đối tượng hiện tại và trả về tham chiếu (*this) của nó. Trong khi đó, hậu tố ++ buộc phải tạo ra một bản sao đối tượng tạm thời lưu giá trị cũ trước khi tăng, rồi mới trả về bản sao tạm thời đó bằng trị (by value). Do đó, tiền tố ++ luôn nhanh hơn." },
      { key: "D", text: "Cả hai chạy với tốc độ máy hoàn toàn giống hệt nhau." }
    ],
    correctAnswer: "C",
    explanation: "Bản chất toán tử hậu tố `x++` là: lấy trị cũ trước rồi mới tăng đối tượng sau. Để mô phỏng đúng trình tự này trong class tự chế, ta bắt buộc phải clone một bản thể tạm thời để giữ nguyên dữ liệu xuất phát, rồi mới cộng dồn đối tượng gốc, sau đó bắn bản sao tạm về. Phép clone này gây hao tốn năng lực xử lý CPU/RAM, đặc biệt với các đối tượng nặng như vector, iterator.",
    difficulty: "Trung bình"
  },
  {
    id: "q154",
    category: Category.OPERATORS,
    questionText: "Nếu một lớp tự định nghĩa toán tử gán sao chép 'operator=' mà không tự kiềm chứng phép tự gán (Self-Assignment), nguy cơ tồi tệ nhất có thể xảy ra là gì?",
    codeSnippet: `Widget w;
w = w; // Tự gán!`,
    options: [
      { key: "A", text: "Đối tượng tự động biến mất khỏi bộ nhớ." },
      { key: "B", text: "Lớp tự biến đổi thành lớp trừu tượng ảo." },
      { key: "C", text: "Lỗi dọn rác sớm của CPU." },
      { key: "D", text: "Phá hủy dữ liệu: Có thể dọn vùng nhớ Heap cũ của đối tượng đích (cũng chính là đối tượng nguồn), sau đó cố gắng copy dữ liệu đã bị xóa đó sang, dẫn tới dính lỗi phân rã vùng nhớ hoặc đọc rác." }
    ],
    correctAnswer: "D",
    explanation: "Trong toán tử gán, việc đầu tiên ta thường làm là gọi `delete` vùng nhớ Heap cũ để tránh rò rỉ. Nếu đối tượng tự gán cho chính nó (`w = w`), hành động giải phóng vùng Heap cũ của đích sẽ vô tình xóa sạch luôn tệp dữ liệu duy nhất mà nguồn đang ôm giữ. Khi đó, bước đọc dữ liệu sau đó sẽ hoàn toàn sụp đổ. Do đó luôn cần chốt chặn `if (this == &other) return *this;`.",
    difficulty: "Khó"
  },
  {
    id: "q155",
    category: Category.OPERATORS,
    questionText: "Kiểu trả về hợp lý và chuẩn mực nhất khi thiết kế nạp chồng toán tử so sánh nhỏ hơn 'operator<' là gì?",
    codeSnippet: `class Student {
    int score;
public:
    // Kiểu trả về nào là chuẩn xác?
    _type_ operator<(const Student& other) const;
};`,
    options: [
      { key: "A", text: "bool" },
      { key: "B", text: "int (trả về -1, 0, 1 giống C)" },
      { key: "C", text: "void" },
      { key: "D", text: "Student&" }
    ],
    correctAnswer: "A",
    explanation: "Mọi toán tử so sánh logic (như `<`, `>`, `==`, `!=`) đều có bản chất là các biểu thức logic đúng/sai. Vì vậy kiểu trả về chuẩn mực nhất luôn là kiểu boolean `bool` nhằm kết xuất kết quả thật/giả phục vụ cho các thuật toán tìm kiếm, sắp xếp sẵn có của STL.",
    difficulty: "Dễ"
  },
  {
    id: "q156",
    category: Category.ADVANCED,
    questionText: "Tại sao trong C++, định nghĩa mã nguồn của một Hàm mẫu (Function Template) hoặc Lớp mẫu (Class Template) luôn phải viết chung trong file Header (.h) thay vì tách mã sang file .cpp như class thông thường?",
    codeSnippet: `template <typename T>
class Stack {
    // Viết mã nguồn ở file nào?
};`,
    options: [
      { key: "A", text: "Học trình C++ bắt buộc như vậy để bảo mật code." },
      { key: "B", text: "Vì Template bản chất không phải mã máy thật, nó chỉ là một bản thiết kế (blueprint). Trình biên dịch cần nhìn thấy toàn bộ định nghĩa mã nguồn ở mỗi nơi sử dụng để tiến hành khởi tạo thực tế (Instantiation) mã máy cụ thể cho từng kiểu dữ liệu T được nạp vào lúc xây dựng." },
      { key: "C", text: "Để cho phép liên kết động qua bảng vtable." },
      { key: "D", text: "Viết sang file .cpp làm tăng gấp đôi dung lượng bộ nhớ động." }
    ],
    correctAnswer: "B",
    explanation: "Khi biên dịch chương trình, trình biên dịch xử lý các file .cpp riêng rẽ. Nếu ta để mã hàm template ở một file .cpp khác, compiler ở file gọi sẽ không biết dòng code chạy thực tế thế nào để sinh ra phiên bản cụ thể (ví dụ: `Stack<int>`), dẫn tới lỗi nghiêm trọng lọt nhãn liên kết (Unresolved External Symbol) do linker dấy lên.",
    difficulty: "Khó"
  },
  {
    id: "q157",
    category: Category.ADVANCED,
    questionText: "Cơ chế 'Template Specialization' (Chuyên biệt hóa mẫu) trong C++ được sinh ra nhằm mục đích gì?",
    codeSnippet: `template <typename T> class Cache {};
template <> class Cache<char*> {}; // Chuyên biệt hóa kiểu char*`,
    options: [
      { key: "A", text: "Chỉ cho phép chạy duy nhất một kiểu dữ liệu." },
      { key: "B", text: "Cho phép viết định nghĩa mã nguồn riêng biệt hoặc tối ưu hóa thuật toán cụ thể cho một kiểu dữ liệu đặc biệt nào đó (như char*) của mẫu chung, tránh giải thuật chung kém tương khớp." },
      { key: "C", text: "Ép buộc đối tượng phải kế thừa đa hình." },
      { key: "D", text: "Khóa hàm không cho bất kỳ lớp con nào sử dụng." }
    ],
    correctAnswer: "B",
    explanation: "Ví dụ ta có một hàm mẫu so sánh `lessThan<T>(T a, T b)` hoạt động tốt với số thông thường. Tuy nhiên, nếu truyền chuỗi `char*`, phép so sánh `a < b` sẽ so sánh hai địa chỉ con trỏ chứ không so sánh nội dung chuỗi. Chuyên biệt hóa `lessThan<char*>` cho phép ta dùng `strcmp` chuyên trách để xử lý đúng logic so sánh.",
    difficulty: "Khó"
  },
  {
    id: "q158",
    category: Category.ADVANCED,
    questionText: "Quá trình dọn dẹp các đối tượng Stack cục bộ dọc đường trong khi hệ thống ném ngoại lệ đi tìm khối lệnh 'catch' tương thích được gọi là gì?",
    codeSnippet: `// Tiến trình lan tỏa dọn dẹp bộ nhớ tự động`,
    options: [
      { key: "A", text: "Memory Compaction (Gom tụ vùng nhớ)" },
      { key: "B", text: "Stack Unwinding (Tháo rỡ ngăn xếp)" },
      { key: "C", text: "Garbage Collection (Gom rác đa luồng)" },
      { key: "D", text: "Deadlock Detection" }
    ],
    correctAnswer: "B",
    explanation: "Khi ngoại lệ được kích hoạt bởi lệnh `throw`, hệ thống C++ sẽ rà soát ngược từ vị trí lỗi lên các lớp bảo vệ chứa block `try/catch`. Trong quá trình trôi ngược này, tất cả các đối tượng cục bộ cấp phát trên Stack nằm trong phạm vi bị hủy bỏ sẽ được gọi Destructor dọn dẹp chu đáo để tránh rò rỉ RAM. Tiến trình dọn dẹp automatic này gọi là Stack Unwinding.",
    difficulty: "Khó"
  },
  {
    id: "q159",
    category: Category.ADVANCED,
    questionText: "Nếu một ngoại lệ được ném ra ngoài (throw Exception) mà toàn bộ hệ thống từ hàm gọi đến hàm main() đều không sở hữu bất kỳ block 'catch' tương khớp nào, chuyện gì sẽ xảy ra?",
    codeSnippet: `throw std::runtime_error("Crash!"); // Không có catch`,
    options: [
      { key: "A", text: "Hệ điều hành Windows tự bọc lỗi để chạy tiếp." },
      { key: "B", text: "Ngoại lệ bị triệt tiêu âm thầm và chương trình vẫn chạy phớt lờ lỗi." },
      { key: "C", text: "Chương trình lập tức sập nguồn (Crash) thông qua hàm hệ thống cưỡng chế đóng std::terminate()." },
      { key: "D", text: "Hệ thống tự động khởi tạo lại hệ điều hành." }
    ],
    correctAnswer: "C",
    explanation: "Ngoại lệ không được bắt (Unhandled Exception) là lỗi chí tử của mọi hệ thống phần mềm C++. Nếu không có bộ lọc `catch` tương ứng bọc lại, trình chạy C++ Runtime lập tức gọi `std::terminate()` để nhanh chóng đóng ứng dụng, tránh nguy cơ dữ liệu phần cứng bị biến đổi rác.",
    difficulty: "Dễ"
  },
  {
    id: "q160",
    category: Category.ADVANCED,
    questionText: "Trong C++, kiểu dữ liệu nào dưới đây có thể được sử dụng làm đối tượng ném ngoại lệ (Exception)?",
    codeSnippet: `throw x; // x thuộc kiểu gì?`,
    options: [
      { key: "A", text: "Chỉ được ném các lớp kế thừa từ std::exception của STL." },
      { key: "B", text: "Bất kỳ kiểu dữ liệu nào trong C++ (bao gồm int, double, string, con trỏ hay class tự chế) đều có thể được dùng làm đối tượng ném ngoại lệ." },
      { key: "C", text: "Chỉ được ném chuỗi văn bản char*." },
      { key: "D", text: "Chỉ được ném các hằng số tĩnh." }
    ],
    correctAnswer: "B",
    explanation: "Mặc dù chuẩn mực lập trình hiện đại luôn khuyến khích lập trình viên tạo hoặc kế thừa lớp chuẩn từ `std::exception` để đồng bộ ngữ cảnh lỗi, về mặt kỹ thuật, C++ hoàn toàn hỗ trợ bạn ném bất cứ kiểu cơ bản nào ví dụ: `throw 404;` hoặc `throw \"Error ocurred\";`.",
    difficulty: "Trung bình"
  },
  {
    id: "q161",
    category: Category.INHERITANCE,
    questionText: "Sử dụng chế độ kế thừa nào tương ứng với quan hệ cấu thành thành phần 'Has-A' (Có một) hoặc 'Is-implemented-in-terms-of'?",
    codeSnippet: `class Engine {};
class Car {
    Engine e; // Chế độ liên kết này gọi là gì?
};`,
    options: [
      { key: "A", text: "Kế thừa đa lớp virtual public." },
      { key: "B", text: "Ủy thác hành vi / Chứa trong (Composition / Aggregation)." },
      { key: "C", text: "Kế thừa private thuần khiết." },
      { key: "D", text: "Nạp chồng toán tử cấu thành." }
    ],
    correctAnswer: "B",
    explanation: "Quan hệ Composition (Cấu thành) thể hiện vòng tồn tại sống còn gắn chặt (Xe hơi sở hữu Động cơ). Đây là kỹ thuật cực kỳ tinh tế trong thiết kế phần mềm, ưu việt hơn lạm dụng cây kế thừa sâu rộng, bảo toàn tính module bóc tách của hệ thống độc lập.",
    difficulty: "Dễ"
  },
  {
    id: "q162",
    category: Category.POLYMORPHISM,
    questionText: "Trong lập trình C++, thuật ngữ 'Polymorphism' (Tính đa hình) thực chất cho phép cấu trúc nào hoạt động?",
    codeSnippet: `// Khái niệm đa hình cốt lõi`,
    options: [
      { key: "A", text: "Cho phép đổi tên class tự động khi chương trình chạy." },
      { key: "B", text: "Cho phép một con trỏ lớp cơ sở gửi đi thông điệp gọi hàm giống nhau, nhưng tùy thuộc vào đối tượng thực tế mà nó đang trỏ vào mà kích hoạt phương thức xử lý chuyên biệt tương ứng của đối tượng đó." },
      { key: "C", text: "Cho phép một lớp kế thừa từ vô số các lớp cha khác nhau cùng lúc." },
      { key: "D", text: "Cho phép lưu trữ dữ liệu lớp trong tệp nhị phân nén của đĩa." }
    ],
    correctAnswer: "B",
    explanation: "Tính đa hình (nhiều hình dạng) là đỉnh cao của thiết kế hướng đối tượng. Khi ta gửi lệnh `draw()` qua con trỏ lớp cha `Shape*`, nếu là con trỏ Hình Tròn nó vẽ vòng tròn, nếu là Hình Vuông nó vẽ khối vuông. Điều này giúp viết code tổng quát, dễ bảo trì, dễ mở rộng thêm loại hình con mới mà không sửa mã cũ.",
    difficulty: "Dễ"
  },
  {
    id: "q163",
    category: Category.CONSTRUCTORS,
    questionText: "Khi nào trình biên dịch sẽ KHÔNG cung cấp Hàm khởi tạo mặc định (Default Constructor) rỗng một cách tự động?",
    codeSnippet: `class Database {
public:
    Database(string url); // Lúc này có dùng được Database d; không?
};`,
    options: [
      { key: "A", text: "Khi lớp con thực hiện kế thừa đa ảo." },
      { key: "B", text: "Khi lập trình viên tự khai báo bất kỳ một Constructor có tham số nào của lớp đó." },
      { key: "C", text: "Khi lớp có chứa thuộc tính kiểu số float." },
      { key: "D", text: "Constructor mặc định luôn luôn được sinh tự động bất kể tình huống gì." }
    ],
    correctAnswer: "B",
    explanation: "Triết lý C++: Trình biên dịch chỉ hỗ trợ sinh constructor mặc định rỗng nếu bạn hoàn toàn thụ động không tự viết bất kỳ constructor nào. Một khi bạn đã viết constructor có tham số như `Database(string url)`, trình biên dịch hiểu rằng lớp này đòi hỏi điều kiện vận hành khắt khe ban đầu và dứt khoát khóa hoàn toàn lệnh tạo rỗng mặc định.",
    difficulty: "Trung bình"
  },
  {
    id: "q164",
    category: Category.BASICS,
    questionText: "Để ép buộc trình biên dịch sinh lại Hàm khởi tạo mặc định rỗng tự động bất chấp lớp đã có constructor có tham số (C++11), cú pháp viết ra sao?",
    codeSnippet: `class Student {
public:
    Student(string name);
    Student() = ______; // Điền vào chỗ trống
};`,
    options: [
      { key: "A", text: "delete" },
      { key: "B", text: "default" },
      { key: "C", text: "virtual" },
      { key: "D", text: "explicit" }
    ],
    correctAnswer: "B",
    explanation: "Từ C++11, cú pháp `= default;` cho phép lập trình viên đề nghị rõ ràng với compiler: 'Dù tôi đã viết constructor phức tạp khác, hãy khôi phục và sinh tự động cho tôi phiên bản mặc định tối ưu của hệ thống'. Điều này giúp tránh việc viết rỗng thủ công rườm rà.",
    difficulty: "Dễ"
  },
  {
    id: "q165",
    category: Category.CONSTRUCTORS,
    questionText: "Nếu một phương thức hủy (Destructor) của lớp Cha có dán từ khóa 'virtual', thì bảng ảo vtable của lớp con sẽ lưu trữ địa chỉ của destructor của lớp con ở đâu?",
    codeSnippet: `virtual ~Base();`,
    options: [
      { key: "A", text: "Không lưu trữ gì vì destructor không phải hàm." },
      { key: "B", text: "Vtable của lớp con sẽ lưu địa chỉ hàm hủy của lớp con thay thế vào vị trí tương ứng để gọi khi dọn dẹp đa hình." },
      { key: "C", text: "Lưu ở vùng nhớ riêng biệt của phân vùng hệ thống." },
      { key: "D", text: "Do trình quản lý rác của C++ cấp từ xa." }
    ],
    correctAnswer: "B",
    explanation: "Hàm hủy ảo hoạt động theo cơ chế đa hình chuẩn mực. Khi destructor lớp cha là `virtual`, lối gọi hàm hủy sẽ thông qua bảng vtable của lớp con, đảm bảo khi xóa qua con trỏ lớp cha, hàm hủy của lớp con được ưu tiên kích hoạt chạy trước tiên.",
    difficulty: "Khó"
  },
  {
    id: "q166",
    category: Category.BASICS,
    questionText: "Trong C++, hằng số con trỏ an toàn 'nullptr' (C++11) sở hữu ưu thế tuyệt hảo nào so với macro 'NULL' (hoặc số 0) truyền thống?",
    codeSnippet: `void print(int x);
void print(char* p);
print(nullptr); // Gọi hàm nào?`,
    options: [
      { key: "A", text: "nullptr tốn ít tài nguyên bộ nhớ hơn số 0." },
      { key: "B", text: "Chỉ khác nhau ở cách viết và ký đồ hóa trang trí." },
      { key: "C", text: "nullptr mang một kiểu dữ liệu con trỏ thực sự (std::nullptr_t), ngăn chặn hoàn toàn lỗi gây tranh chấp nạp chồng (ambiguous overload) khi truyền tham số con trỏ vào hàm thay vì tự động chuyển thành số nguyên int bừa bãi." },
      { key: "D", text: "nullptr cho phép gán trực tiếp cho đối tượng số thực double." }
    ],
    correctAnswer: "C",
    explanation: "Macro `NULL` truyền thống của C thực chất chỉ chứa trị định nghĩa số 0 (`#define NULL 0`). Khi nạp chồng hàm `print(int)` và `print(char*)`, cuộc gọi `print(NULL)` gây xung đột vì số 0 ưu tiên khớp với kiểu `int`. `nullptr` giải quyết dứt điểm điều này vì nó mang kiểu con trỏ thuần túy và không bao giờ tự ép thành kiểu số.",
    difficulty: "Trung bình"
  },
  {
    id: "q167",
    category: Category.INHERITANCE,
    questionText: "Làm thế nào để truy cập trực tiếp một phương thức hoặc thuộc tính của lớp Cha khi nó đã bị che khuất hoặc định nghĩa đè (Override/Name Hiding) hoàn toàn bên trong lớp Con?",
    codeSnippet: `class Child : public Parent {
    void run() {
        // Làm thế nào để gọi run() của Parent?
    }
};`,
    options: [
      { key: "A", text: "Dùng toán tử gọi cha: 'Parent->run();'." },
      { key: "B", text: "Triệu gọi tường minh thông qua toán tử định phạm vi tầm vực: 'Parent::run();'." },
      { key: "C", text: "Sử dụng từ khóa super giống như Java." },
      { key: "D", text: "Hoàn toàn bất khả thi vì hàm cũ đã bị xóa vĩnh viễn khỏi RAM." }
    ],
    correctAnswer: "B",
    explanation: "Trong C++, ta không có từ khóa `super` như Java, C# hay Python. Để nói rõ với trình biên dịch rằng ta muốn truy xuất thẳng phiên bản phương thức gốc nằm ở lớp cha, ta bắt buộc phải sử dụng cú pháp toán tử phạm vi `Parent::methodName()`.",
    difficulty: "Dễ"
  },
  {
    id: "q168",
    category: Category.BASICS,
    questionText: "Hành vi khai báo biến tham chiếu trỏ vào biến tạm thời rvalue (RValue Reference - kí tự '&&') xuất hiện từ C++11 nhằm phục vụ kịch bản then chốt nào?",
    codeSnippet: `Widget&& w = getTemporaryWidget();`,
    options: [
      { key: "A", text: "Để xóa bộ nhớ của Widget ngay trên Stack." },
      { key: "B", text: "Hỗ trợ tuyệt đối cơ chế Move Semantics (Ngữ nghĩa di chuyển), cho phép thu gom chiếm đoạt tài nguyên vật lý từ đối tượng tạm mà không tốn thủ tục copy tốn RAM." },
      { key: "C", text: "Biến Widget thành lớp mẫu tổng quát." },
      { key: "D", text: "Chuyển giao quyền sở hữu biến cho hàm ảo static." }
    ],
    correctAnswer: "B",
    explanation: "Tham chiếu RValue (`&&`) là cầu nối liên thông cho phép nhận dạng các đối tượng tạm thời sắp biến mất (nhưng đang dắt theo tài nguyên Heap khổng lồ). Nhờ đó, ta trút dữ liệu từ đối tượng tạm sang thực thể mới siêu tốc bằng cách lấy luôn địa chỉ Heap con trỏ cũ của nó, chuyển nhượng nhanh gọn không hề tốn RAM sao chép.",
    difficulty: "Khó"
  },
  {
    id: "q169",
    category: Category.OPERATORS,
    questionText: "Khi nạp chồng toán tử so sánh bằng 'operator==', tham số truyền vào của đối tượng so sánh nên tuân theo định dạng chuẩn mực nào?",
    codeSnippet: `bool operator==(const MyClass& other) const;`,
    options: [
      { key: "A", text: "Phải truyền bằng tham trị 'MyClass other' để thuận tiện tối ưu." },
      { key: "B", text: "Bắt buộc truyền bằng con trỏ 'MyClass* other' và không dùng const." },
      { key: "C", text: "Nên là tham chiếu hằng 'const MyClass& other' để vừa ngăn việc sao chép lãng phí dữ liệu, vừa bảo vệ đối tượng được so sánh không bị sửa trị." },
      { key: "D", text: "Truyền bằng tham chiếu RValue 'MyClass&& other'." }
    ],
    correctAnswer: "C",
    explanation: "Phép so sánh bằng là phép so sánh thuần đọc không sửa đổi. Đi kèm với tư duy tối ưu bộ nhớ, ta truyền tham chiếu `&` của biến bên vế phải để tránh kích hoạt Copy Constructor tốn CPU, rào thêm `const` để cam kết bảo vệ biến đó không dính tỳ vết hiệu chỉnh trái ý đồ.",
    difficulty: "Dễ"
  },
  {
    id: "q170",
    category: Category.ADVANCED,
    questionText: "Nếu một phương thức Class ném ngoại lệ kiểu 'int' như 'throw 404;', khối 'catch' nào dưới đây của người dùng sẽ bắt trọn lỗi này?",
    codeSnippet: `try {
    throw 404;
} catch(...) { // Đoạn catch nào?
}`,
    options: [
      { key: "A", text: "catch(double d)" },
      { key: "B", text: "catch(const char* s)" },
      { key: "C", text: "catch(int code) hoặc catch(...) là khối lệnh bắt tất cả ngoại lệ không phân biệt kiểu." },
      { key: "D", text: "Không có khối nào bắt được kiểu int, chương trình lập tức crash." }
    ],
    correctAnswer: "C",
    explanation: "Kiểu ngoại lệ bắt buộc phải tương khớp hoàn hảo về mặt kiểu dữ liệu thô. Do ngoại lệ quăng ra kiểu `int`, chỉ có `catch(int code)` mới được tiếp nhận xử lý. Ngoài ra, cú pháp catch ba chấm `catch(...)` (catch-all) là phao cứu sinh vạn năng được dùng để đón lõng mọi kiểu ngoại lệ xảy ra trên đời.",
    difficulty: "Dễ"
  },
  {
    id: "q171",
    category: Category.BASICS,
    questionText: "Một phương thức hằng 'const method' được cam kết bảo vệ an toàn dữ liệu, nhưng trong trường hợp cấp bách muốn thay đổi giá trị thuộc tính, ta viết cách nào?",
    codeSnippet: `class Timer {
    int count; // Làm thế nào chỉnh count trong const method?
};`,
    options: [
      { key: "A", text: "Sử dụng ép kiểu thô bạo ép đối tượng sang con trỏ kiểu int." },
      { key: "B", text: "Khai báo thuộc tính đó đi kèm từ khóa 'mutable' ngay từ đầu." },
      { key: "C", text: "Đưa thuộc tính đó vào phương thức hủy." },
      { key: "D", text: "Biến biến đó thành biến tĩnh static ảo." }
    ],
    correctAnswer: "B",
    explanation: "Từ khóa `mutable` là ngoại lệ vàng được tạo ra giúp các phương thức `const` được phép cập nhật dữ liệu của riêng những biến kỹ thuật bổ trợ mà không đánh sập cam kết bảo mật chung của hàm.",
    difficulty: "Trung bình"
  },
  {
    id: "q172",
    category: Category.ADVANCED,
    questionText: "Trong lớp cấu trúc 'std::vector' của C++, phương thức chèn phần tử 'emplace_back()' khác biệt ưu việt hơn 'push_back()' truyền thống ở cơ chế dịch chuyển nào?",
    codeSnippet: `std::vector<Item> v;
v.emplace_back(10, "Gold"); // So với push_back`,
    options: [
      { key: "A", text: "emplace_back() tự giải phóng RAM khi mảng đầy." },
      { key: "B", text: "push_back() thực hiện đa kế thừa trước khi thêm." },
      { key: "C", text: "emplace_back() nhận trực tiếp các tham số của Constructor và dựng đối tượng trực tiếp ngay tại ô nhớ trống của vector, giúp triệt tiêu hoàn toàn thao tác tạo đối tượng tạm thời rồi lại gọi copy/move constructor giống push_back()." },
      { key: "D", text: "Không có khác biệt nào ngoài độ dài tên hàm." }
    ],
    correctAnswer: "C",
    explanation: "Đây là tối ưu hóa xuất sắc kể từ C++11. Trong khi `push_back` yêu cầu bạn đưa vào một đối tượng đã được định hình sẵn (đòi hỏi dấy cuộc gọi copy/move để chuyển data vào mảng), `emplace_back` trút trực tiếp tham số constructor xuống RAM vector, kích hoạt dựng đối tượng tại gốc ô nhớ đích nên nhanh hơn rất rõ nét.",
    difficulty: "Khó"
  },
  {
    id: "q173",
    category: Category.ADVANCED,
    questionText: "Smart Pointer 'std::unique_ptr' (Con trỏ thông minh độc quyền) ngăn chặn hoàn toàn nguy cơ rò rỉ bộ nhớ động nhờ cơ chế quản lý vòng đời nào?",
    codeSnippet: `std::unique_ptr<int> ptr(new int(5)); // unique_ptr`,
    options: [
      { key: "A", text: "Cơ chế tuần hoàn garbage collection dọn dẹp bộ nhớ định kỳ sau mỗi 5 giây." },
      { key: "B", text: "Cơ chế quản lý RAII (Resource Acquisition Is Initialization): Sở hữu độc quyền tài nguyên và tự động dứt khoát kích hoạt toán tử 'delete' dọn sạch vùng RAM Heap ngay khi đối tượng unique_ptr rơi ra ngoài phạm vi hoạt động của khối lệnh." },
      { key: "C", text: "Tự động sao lưu dữ liệu luồng sang phân vùng Stack của CPU." },
      { key: "D", text: "Nạp tài nguyên vào bảng địa chỉ vtable tĩnh." }
    ],
    correctAnswer: "B",
    explanation: "`std::unique_ptr` tuân thủ nguyên lý RAII cực kỳ chặt chẽ trong C++. Nó lưu con trỏ Heap trong lòng một class Stack thông thường có Destructor tự dọn dẹp. Đi kèm triết lý độc quyền tuyệt đối: Cấm copy (`= delete`), chỉ cho phép dịch chuyển bằng `std::move`. Nhờ vậy tài nguyên luôn có đúng 1 chủ thể quản lý, dứt điểm lỗi rò rỉ RAM.",
    difficulty: "Khó"
  },
  {
    id: "q174",
    category: Category.ADVANCED,
    questionText: "Hành vi sử dụng smart pointer 'std::shared_ptr' cho phép nhiều con trỏ cùng sở hữu một tài nguyên Heap. Làm thế nào để 'shared_ptr' biết được lúc nào là thời khắc cuối cùng để thu hồi vùng nhớ Heap đó?",
    codeSnippet: `// Quản lý chia sẻ bộ nhớ trên nhiều con trỏ`,
    options: [
      { key: "A", text: "Đục một ngắt phần cứng khi bộ đếm đạt 100 lần." },
      { key: "B", text: "Nhờ bộ đếm tham chiếu nội bộ (Reference Counting); mỗi khi shared_ptr bị sao chép bộ đếm tăng 1, khi một shared_ptr bị hủy bộ đếm giảm 1. Khi bộ đếm rơi về đúng số 0, tài nguyên Heap sẽ được delete vĩnh viễn." },
      { key: "C", text: "Mỗi con trỏ tự động tranh giành quyền delete ngẫu nhiên." },
      { key: "D", text: "Shared_ptr không bao giờ dọn dẹp bộ nhớ." }
    ],
    correctAnswer: "B",
    explanation: "`shared_ptr` sử dụng cơ chế đếm tham chiếu (Reference Counting) trên một khối quản lý vùng nhớ dùng chung. Đây là giải pháp hoàn mỹ quản lý vòng đời đối tượng phức tạp chuyển giao qua nhiều thành phần phần mềm mà không lo lỗi giải phóng nhầm hay giải phóng thiếu.",
    difficulty: "Khó"
  },
  {
    id: "q175",
    category: Category.ADVANCED,
    questionText: "Khi dùng cặp 'std::shared_ptr' liên kết lặp chéo lẫn nhau (A trỏ tới B, và B trỏ ngược lại A), lỗi nguy hại nào xuất hiện khiến bộ nhớ Heap không bao giờ được giải phóng?",
    codeSnippet: `// Lỗi chu kỳ tham chiếu chéo (Circular Reference)`,
    options: [
      { key: "A", text: "Hiện tượng chập mạch cache CPU dòng chính." },
      { key: "B", text: "Xung đột chu kỳ tham chiếu chéo (Circular Reference). Bộ đếm của cả hai đối tượng không bao giờ có thể hạ về mức 0, dẫn tới kịch bản rò rỉ RAM vĩnh hằng dù chương trình đã kết thúc khối lệnh." },
      { key: "C", text: "Tự động chuyển cả hai lớp thành kiểu dữ liệu tĩnh." },
      { key: "D", text: "Biên dịch báo lỗi cú pháp do không cho khai báo hàm." }
    ],
    correctAnswer: "B",
    explanation: "Do liên kết khép kín vòng tròn, đối tượng A muốn giải phóng thì phải chờ B hủy trước để bộ đếm của A về 0. Nhưng B muốn hủy lại phải đợi A giải mốc giữ B. Cặp đôi rơi vào trạng thái bế tắc vô hạn, cả 2 giữ bộ đếm luôn bằng ít nhất 1 và trơ gan rò rỉ bộ nhớ. Khắc phục bằng cách dùng `std::weak_ptr` phá vỡ chu kỳ tham chiếu chéo.",
    difficulty: "Khó"
  }
];
