/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Question } from "../types";

export const BATCH6_QUESTIONS: Question[] = [
  {
    id: "q126",
    category: Category.POLYMORPHISM,
    questionText: "Tại sao trong C++ ta bắt buộc phải khai báo hàm hủy ảo (Virtual Destructor) ở lớp cha nếu lớp đó có phương thức ảo và định hướng được kế thừa rộng rãi?",
    codeSnippet: `class Base {
public:
    virtual ~Base() {} // Tại sao cần virtual?
};
class Derived : public Base {
    int* array;
public:
    ~Derived() { delete[] array; }
};`,
    options: [
      { key: "A", text: "Để giải phóng vùng nhớ Stack của đối tượng Derived khi gán tĩnh." },
      { key: "B", text: "Nếu không khai báo ảo, khi xóa đối tượng lớp con qua một con trỏ lớp cha (ví dụ 'Base* ptr = new Derived(); delete ptr;'), C++ sẽ chỉ gọi hàm hủy của Base, bỏ qua hàm hủy của Derived đại diện cho rò rỉ RAM thảm khốc." },
      { key: "C", text: "Để bắt buộc lớp con phải nạp chồng destructor." },
      { key: "D", text: "Hàm hủy ảo giúp tăng tốc độ gọi constructor." }
    ],
    correctAnswer: "B",
    explanation: "Khi xóa một đối tượng thông qua con trỏ lớp Base (`delete ptr;`), nếu destructor ở Base không có `virtual`, trình biên dịch chỉ kiểm tra kiểu tĩnh của con trỏ (là `Base*`) và kích hoạt duy nhất hàm hủy của `Base`. Từ đó, các cấu trúc dữ liệu bên trong `Derived` (như `array` cấp phát động) hoàn toàn bị bỏ quên không bao giờ được giải phóng.",
    difficulty: "Khó"
  },
  {
    id: "q127",
    category: Category.POLYMORPHISM,
    questionText: "Chuyện gì xảy ra nếu bạn cố ý gọi một phương thức ảo (Virtual Function) ngay từ bên trong lòng Hàm khởi tạo (Constructor) của lớp Cha?",
    codeSnippet: `class Base {
public:
    Base() { execute(); } // Gọi hàm ảo trong constructor!
    virtual void execute() { cout << "Base "; }
};
class Derived : public Base {
public:
    void execute() override { cout << "Derived "; }
};`,
    options: [
      { key: "A", text: "Đa hình hoạt động: in ra 'Derived '." },
      { key: "B", text: "Trình biên dịch báo lỗi nặng hoãn biên dịch." },
      { key: "C", text: "Tính đa hình vô tác dụng tại thời điểm này: In ra 'Base ' do đối tượng lớp con lúc đó chưa được xây dựng hoàn tất, bảng vtable chưa liên kết mã lớp con." },
      { key: "D", text: "Gây lỗi sập Stack tràn bộ nhớ." }
    ],
    correctAnswer: "C",
    explanation: "Đây là một bẫy kinh điển trong lập trình hệ thống C++. Trong quá trình constructor của `Base` hoạt động, thực thể `Derived` chưa hề được khởi tạo và các biến thành viên của nó chưa sẵn sàng. Do đó, cơ chế đa hình bị tắt, trình biên dịch bỏ qua bảng vtable của `Derived` và gọi trực tiếp phiên bản hàm tại `Base` để bảo đảm an toàn ô nhớ.",
    difficulty: "Khó"
  },
  {
    id: "q128",
    category: Category.POLYMORPHISM,
    questionText: "Trong C++, từ khóa 'override' bổ sung ở cuối nguyên mẫu hàm trong lớp con (Derived) đóng vai trò gì?",
    codeSnippet: `class Child : public Parent {
public:
    void process(long x) override; // Vai trò override?
};`,
    options: [
      { key: "A", text: "Ép buộc hàm này trở thành hàm inline." },
      { key: "B", text: "Báo cho trình biên dịch kiểm tra tính tương khớp tuyệt đối về tên, kiểu trả về và tham số của hàm với hàm ảo ở lớp cha; nếu có sự lệch chữ ký (signature), sẽ sinh lỗi biên dịch thay vì âm thầm biên dịch thành một hàm độc lập mới." },
      { key: "C", text: "Vô hiệu hóa quyền truy cập private của hàm ảo." },
      { key: "D", text: "Bắt buộc hàm này chỉ được dùng với con trỏ." }
    ],
    correctAnswer: "B",
    explanation: "Từ khóa ngữ cảnh 'override' (C++11) cực tốt để ngăn ngừa lỗi gõ nhầm chữ ký hàm. Ví dụ, hàm cha là `virtual void process(int x)` mà con ghi `void process(long x)` (lắp sai kiểu dữ liệu), nếu có `override`, compiler lập tức phanh lại và chấn chỉnh lỗi trùng khớp, tránh lỗi nạp chồng sai ý đồ.",
    difficulty: "Trung bình"
  },
  {
    id: "q129",
    category: Category.POLYMORPHISM,
    questionText: "Từ khóa 'final' gán vào cuối một định nghĩa Phương thức ảo hoặc sau tên lớp có chức năng gì trong C++?",
    codeSnippet: `class FinalClass final : public Base {
    void process() final;
};`,
    options: [
      { key: "A", text: "Báo hiệu đây là phương thức ảo thuần khiết." },
      { key: "B", text: "Ngăn chặn tuyệt đối việc bất kỳ lớp nào khác kế thừa từ 'FinalClass', đồng thời chặn lớp con override phương thức 'process()'." },
      { key: "C", text: "Yêu cầu giải phóng RAM ngay sau phương thức chạy xong." },
      { key: "D", text: "Chuyển phương thức thành tính chất static cố định." }
    ],
    correctAnswer: "B",
    explanation: "Từ khóa 'final' (áp dụng từ C++11) dùng để chốt chặn cây phả hệ kế thừa hoặc khóa đa hình. Một lớp đánh dấu `final` sẽ không thể làm cha cho bất cứ lớp con nào khác. Phương thức ảo đánh dấu `final` cũng không thể bị ghi đè thêm ở các đời sau.",
    difficulty: "Trung bình"
  },
  {
    id: "q130",
    category: Category.INHERITANCE,
    questionText: "Sự khác biệt lớn nhất giữa chế độ kế thừa 'public' truyền thống so với kế thừa 'private' là gì?",
    codeSnippet: `class Sub1 : public Base {};
class Sub2 : private Base {};`,
    options: [
      { key: "A", text: "Kế thừa 'private' biến mọi thành viên của lớp Cha thành private ở lớp Con, cắt đứt khả năng truy cập công khai gián tiếp từ bên ngoài lớp Con." },
      { key: "B", text: "Kế thừa 'public' không chạy Constructor lớp cha." },
      { key: "C", text: "Kế thừa 'private' tiêu tốn gấp đôi không gian bộ nhớ." },
      { key: "D", text: "Kế thừa 'public' cấm nạp chồng đa hình." }
    ],
    correctAnswer: "A",
    explanation: "Kế thừa public giữ nguyên tính chất của các cột mốc quyền truy cập (public vẫn là public). Trái lại, kế thừa private thu gọn toàn thể quyền truy cập các thuộc tính/phương thức nhận từ `Base` về phân vùng bảo mật private trong lòng lớp Con. Do đó, người dùng đối tượng của lớp Con không thể tương tác trực tiếp tới các hàm cha cũ nữa.",
    difficulty: "Trung bình"
  },
  {
    id: "q131",
    category: Category.INHERITANCE,
    questionText: "Khái niệm 'Upcasting' (Ép kiểu ngược dòng) trong C++ ám chỉ thao tác nào?",
    codeSnippet: `class Base {};
class Derived : public Base {};
Derived d;
// Upcasting diễn ra thế nào?`,
    options: [
      { key: "A", text: "Ép kiểu thủ công từ cấu trúc class sang float." },
      { key: "B", text: "Chuyển tài nguyên động từ Heap vào ngăn xếp Stack." },
      { key: "C", text: "Gán con trỏ hoặc tham chiếu của lớp Con cho con trỏ hoặc tham chiếu có kiểu cha Base (luôn được tự động chấp thuận an toàn không cần ép kiểu tường minh)." },
      { key: "D", text: "Xóa sạch các đối tượng trong cùng phân vùng." }
    ],
    correctAnswer: "C",
    explanation: "Kế thừa biểu diễn quan hệ 'IS-A' (Con là một thực thể của Cha). Upcasting là hành vi cực kỳ an toàn vì bản thân một đối tượng Con tự nhiên sở hữu đầy đủ mọi cơ khớp của Cha, cho phép dùng con trỏ `Base*` chỉ định trực tiếp tới đối tượng `Derived` mà không sợ lỗi vùng nhớ.",
    difficulty: "Dễ"
  },
  {
    id: "q132",
    category: Category.INHERITANCE,
    questionText: "Thao tác 'Downcasting' (Ép kiểu xuôi dòng: ép một con trỏ lớp Cha về chỉ định chính xác lớp Con) ẩn chứa rủi ro nào?",
    codeSnippet: `Base* b = new Base();
Derived* d = (Derived*)b; // Downcasting thô bạo!`,
    options: [
      { key: "A", text: "Nó dọn dẹp biến con trỏ b khỏi bộ nhớ Heap." },
      { key: "B", text: "Luôn dính lỗi phân rã ngăn xếp Stack." },
      { key: "C", text: "Dễ gây lỗi truy cập vùng nhớ sai (Undefined Behavior / Crash) nếu đối tượng thực tế mà con trỏ b đang trỏ vào KHÔNG phải là thực thể thuộc lớp Con đó." },
      { key: "D", text: "Bắt buộc phải xài toán tử logic && ảo." }
    ],
    correctAnswer: "C",
    explanation: "Downcasting là phép ép kiểu chứa đựng mạo hiểm cực cao. Một đối tượng chỉ thuần túy là Cha (`b`) sẽ bị thiếu khuyết các thuộc tính mở rộng của lớp Con. Nếu ép kiểu thô bạo ép máy xem đó là Con để thao tác thuộc tính Con, chương trình sẽ nhảy lấn ô RAM và Crash thảm hại. C++ giải quyết an toàn bằng toán tử `dynamic_cast`.",
    difficulty: "Trung bình"
  },
  {
    id: "q133",
    category: Category.POLYMORPHISM,
    questionText: "Để sử dụng toán tử kiểm tra kiểu động an toàn 'dynamic_cast' lúc Downcasting, lớp cơ sở Cha (Base) bắt buộc phải đáp ứng đặc trưng gì?",
    codeSnippet: `Base* b = getAnyObject();
Derived* d = dynamic_cast<Derived*>(b); // Điều kiện để biên dịch?`,
    options: [
      { key: "A", text: "Phải có ít nhất một phương thức ảo (polymorphic class/vtable)." },
      { key: "B", text: "Không được sở hữu bất kỳ constructor nào." },
      { key: "C", text: "Phải đa kế thừa từ lớp std::exception." },
      { key: "D", text: "Tất cả thuộc tính phải cấu hình private." }
    ],
    correctAnswer: "A",
    explanation: "`dynamic_cast` xác thực kiểu dữ liệu đang trỏ bằng cách dựa vào thông tin Run-Time Type Information (RTTI) chứa trong cấu trúc vtable của đối tượng ảo. Nếu lớp cơ sở không mang tính đa hình (không có ít nhất một phương thức ảo nào), RTTI sẽ bị vô hiệu hóa và chương trình báo lỗi biên dịch.",
    difficulty: "Khó"
  },
  {
    id: "q134",
    category: Category.POLYMORPHISM,
    questionText: "Nếu phép kiểm tra 'dynamic_cast' chuyển đổi kiểu con trỏ bị thất bại (đối tượng thực chất không phải lớp đích), nó sẽ trả về kết quả gì?",
    codeSnippet: `Derived* d = dynamic_cast<Derived*>(basePtr);`,
    options: [
      { key: "A", text: "Ném ra một ngoại lệ std::bad_alloc." },
      { key: "B", text: "Trả về giá trị không xác định garbage value." },
      { key: "C", text: "Trả về con trỏ rỗng nullptr (hoặc dấy ngoại lệ std::bad_cast nếu chuyển kiểu tham chiếu)." },
      { key: "D", text: "Phá hủy trực tiếp con trỏ basePtr." }
    ],
    correctAnswer: "C",
    explanation: "Khi chuyển đổi con trỏ qua `dynamic_cast`, cơ chế sẽ khôn ngoan kiểm tra xem thực thể đích có thật sự tương thích hoàn toàn hay không. Nếu không, nó nhẹ nhàng trả về `nullptr`. Đây là mẹo tuyệt vời để người code rẽ nhánh chương trình an toàn, tránh bị sập chương trình bất ngờ.",
    difficulty: "Trung bình"
  },
  {
    id: "q135",
    category: Category.BASICS,
    questionText: "Đối với từ khóa 'mutable', chức năng duy nhất của nó khi định nghĩa biến thuộc tính Class là gì?",
    codeSnippet: `class Window {
    mutable int hoverCount; // mutable để làm gì?
};`,
    options: [
      { key: "A", text: "Cho phép biến này được dọn dẹp trước hạn bởi giải thuật dọn rác." },
      { key: "B", text: "Cho phép giá trị của thuộc tính này được chỉnh sửa tự do ngay cả khi nó nằm trong các phương thức của lớp được đóng dấu hằng 'const'." },
      { key: "C", text: "Được dùng để liên kiết với thư viện Python." },
      { key: "D", text: "Được kế thừa không cần dòng lệnh public." }
    ],
    correctAnswer: "B",
    explanation: "Đôi khi có các thuộc tính chỉ mang tính bổ trợ phụ (ví dụ: bộ đếm số lần đọc, biến cache đệm, khóa luồng) không thay đổi bản chất logic của đối tượng. Khi đó, gán cho biến nhãn `mutable` giúp sửa được nó kể cả trong hàm hằng `const`, gỡ rối đắc lực cho lập trình viên.",
    difficulty: "Khó"
  },
  {
    id: "q136",
    category: Category.CONSTRUCTORS,
    questionText: "Khi viết hàm khởi tạo, lý do bạn nên ưu tiên sử dụng danh sách khởi tạo (Initializer List - sử dụng dấu hai chấm ':') hơn là gán trị bình thường bên trong ngoặc nhọn '{}' là gì?",
    codeSnippet: `MyClass(int val) : data(val) {} // Khuyên chọn
MyClass(int val) { data = val; } // Hạn chế`,
    options: [
      { key: "A", text: "Gán bình thường biến thành biến ảo." },
      { key: "B", text: "Vì danh sách khởi tạo gán giá trị đồng thời khi biến được sinh ra, tránh các bước trung gian lãng phí tạo đối tượng rỗng rồi mới gán, đồng thời đây là cách duy nhất cấu hình thuộc tính 'const' hoặc biến tham chiếu '&'." },
      { key: "C", text: "Dùng danh sách khởi tạo giúp tự sinh destructor." },
      { key: "D", text: "Cú pháp này giúp đoạn mã chạy chậm hơn để máy dễ kiểm lỗi." }
    ],
    correctAnswer: "B",
    explanation: "Gán trị trong khối `{}` thực chất là: sinh biến mặc định trước (gọi Constructor rỗng) rồi sau đó mới thực thi lệnh đè giá trị (gọi toán tử gán). Danh sách khởi tạo `:` khảm thẳng giá trị vào tham số hàm dựng biến nên an toàn tốc độ tuyệt đối, và là con đường sống duy nhất nếu thuộc tính là dạng `const` hoặc biến tham chiếu `&`.",
    difficulty: "Trung bình"
  },
  {
    id: "q137",
    category: Category.CONSTRUCTORS,
    questionText: "Thứ tự khởi tạo các thuộc tính trong danh sách khởi tạo của Constructor được C++ quyết định dựa theo yếu tố nào?",
    codeSnippet: `class Demo {
    int x;
    int y;
public:
    Demo(int val) : y(val), x(y) {} // Có hiểm họa gì?
};`,
    options: [
      { key: "A", text: "Dựa theo thứ tự ghi ở dòng mã khai báo thuộc tính trong Class, hoàn toàn bỏ qua thứ tự bạn liệt kê sau dấu hai chấm ':'." },
      { key: "B", text: "Dựa hoàn toàn vào thứ tự ghi sau dấu hai chấm ':'." },
      { key: "C", text: "Xếp ngẫu nhiên theo dung lượng bộ nhớ." },
      { key: "D", text: "Chạy đồng bộ đa luồng." }
    ],
    correctAnswer: "A",
    explanation: "Đây là một bẫy kinh niên của C++. Thứ tự khởi tạo luôn tuân phục thứ tự định nghĩa biến trong phần khai báo lớp (ở đây `x` trước `y`). Nếu trong Constructor ta viết `: y(val), x(y)`, thì `x` thực ra vẫn bị ép khởi tạo trước từ thuộc dính `y` chưa cấu hình, sinh ra dính rác ô nhớ hoặc lỗi nghiêm trọng (Undefined Behavior).",
    difficulty: "Khó"
  },
  {
    id: "q138",
    category: Category.INHERITANCE,
    questionText: "Từ khóa 'using' trong dòng định nghĩa lớp con (Derived) dưới đây dùng để xử lý vấn đề gì liên quan tới Name Hiding (Che giấu tên)?",
    codeSnippet: `class Base {
public:
    void count(int x);
};
class Derived : public Base {
public:
    using Base::count; // Mục đích?
    void count(string s);
};`,
    options: [
      { key: "A", text: "Để xóa vĩnh viễn hàm count(int) của Base." },
      { key: "B", text: "Được sử dụng nhằm nạp thêm thư viện toán học std." },
      { key: "C", text: "Đưa các hàm trùng tên bị che khuất ở Base ra phạm vi công khai của đối tượng Derived, cho phép nạp chồng hàm liên thông giữa cả Cha lẫn Con." },
      { key: "D", text: "Ép hàm count tự hóa thành hàm ảo." }
    ],
    correctAnswer: "C",
    explanation: "Thông thường nếu ta viết phương thức `count(string)` ở lớp con trùng tên phương thức `count(int)` ở lớp cha, C++ tự động kích hoạt tính năng Name Hiding che giấu hoàn toàn bản hàm cha cũ. Việc dùng `using Base::count;` mang các hàm nạp chồng của lớp cha trở lại giúp đối tượng lớp con thừa hưởng mượt mà cả hai ngữ cảnh.",
    difficulty: "Khó"
  },
  {
    id: "q139",
    category: Category.POLYMORPHISM,
    questionText: "Nếu một lớp con (Derived) kế thừa từ lớp ảo thuần khiết (Abstract Class / Interface) mà không viết mã override định nghĩa cho toàn bộ hàm ảo thuần khiết của lớp cha, chuyện gì sẽ xảy ra?",
    codeSnippet: `class Animal {
    virtual void makeNoise() = 0; // Hàm ảo thuần khiết
};
class Dog : public Animal {
    // Không ghi đè makeNoise!
};`,
    options: [
      { key: "A", text: "Lớp con tự động trở thành một lớp trừu tượng mới và trình biên dịch từ chối cấp phép tạo biến đối tượng của Dog (báo lỗi biên dịch)." },
      { key: "B", text: "Dog vẫn khởi tạo bình thường và gọi hàm rỗng." },
      { key: "C", text: "Toàn bộ tài nguyên của Dog bị xóa sạch." },
      { key: "D", text: "Biên dịch thành công với giá trị ngẫu nhiên." }
    ],
    correctAnswer: "A",
    explanation: "Bất kỳ lớp con nào kế thừa lớp trừu tượng bắt buộc phải gánh vác việc thực thi hóa (implement) tất cả các hàm thuần ảo đại diện của cha. Chỉ cần bỏ sót một hàm duy nhất, lớp con đó cũng mặc định bị xem là lớp trừu tượng chưa chín muồi và cấm nhân bản thực thể trực tiếp.",
    difficulty: "Trung bình"
  },
  {
    id: "q140",
    category: Category.BASICS,
    questionText: "Kích thước tối thiểu của một thực thể Class rỗng hoàn toàn (không thuộc tính, không phương thức ảo) trong C++ là bao nhiêu byte?",
    codeSnippet: `class Empty {};
cout << sizeof(Empty); // Kết quả tối thiểu?`,
    options: [
      { key: "A", text: "0 byte (hoàn toàn không tốn vùng RAM nào)." },
      { key: "B", text: "Ít nhất 1 byte để trình quản lý địa chỉ định cấu trúc định vị phân biệt các đối tượng khác nhau trong RAM." },
      { key: "C", text: "4 byte tương ứng với con trỏ thô của kiến trúc 32-bit." },
      { key: "D", text: "8 byte do cơ cấu ép căn lề bộ nhớ 64-bit." }
    ],
    correctAnswer: "B",
    explanation: "Trong C++, mọi thực thể đối tượng độc lập khi cấp phát đều phải sở hữu một địa chỉ định vị độc độc duy nhất trong không gian địa chỉ bộ nhớ RAM. Nếu Class rỗng có size là 0, hai đối tượng kề nhau sẽ có chung một địa chỉ, dẫn đến mâu thuẫn hệ thống. Do đó, kích thước tối thiểu của class rỗng luôn là 1 byte.",
    difficulty: "Trung bình"
  },
  {
    id: "q141",
    category: Category.BASICS,
    questionText: "Thành viên static của một lớp được khởi tạo vùng nhớ thực tế và khai báo giá trị ban đầu ở đâu để tránh lỗi gán mập mờ?",
    codeSnippet: `class Device {
    static int id; // Chỉ mới là khai báo đặc tả
};`,
    options: [
      { key: "A", text: "Khai báo bừa ngay trong hàm main." },
      { key: "B", text: "Khởi tạo bắt buộc ngay bên trong thân của bất kỳ Hàm dựng nào." },
      { key: "C", text: "Phải được định nghĩa liên kết và khởi gán giá trị cụ thể ở ngoài lớp, tại phân cấp file mã nguồn .cpp tương quan." },
      { key: "D", text: "C++ tự động gán thẳng giá trị rác ngẫu nhiên mà không cần khai báo ngoài." }
    ],
    correctAnswer: "C",
    explanation: "Khai báo `static int id;` trong lớp chỉ là lời báo trước với trình biên dịch về sự tồn tại của tên biến. Vùng nhớ thật sự của thuộc tính tĩnh đó phải được định nghĩa tường minh bên ngoài khối lớp (thường là trong file nguồn `.cpp` ví dụ: `int Device::id = 100;`), nếu không bộ liên kết Linker sẽ dấy lỗi sập chương trình sau biên dịch.",
    difficulty: "Trung bình"
  },
  {
    id: "q142",
    category: Category.INHERITANCE,
    questionText: "Trong kế thừa ảo 'virtual inheritance', mục tiêu của việc đưa từ khóa 'virtual' trước chỉ thị lớp cha là nhằm giải quyết điều gì?",
    codeSnippet: `class Merchant : virtual public Person {};
class Scholar : virtual public Person {};
class Teacher : public Merchant, public Scholar {};`,
    options: [
      { key: "A", text: "Ép buộc lớp Person phải có hàm ảo thuần khiết." },
      { key: "B", text: "Để giải quyết hiện tượng Diamond Problem: Chặt đứt nhánh thừa kế kép, bảo đảm lớp Teacher chỉ chứa đúng duy nhất một bản sao vùng nhớ cơ sở kế thừa từ Person cổ xưa." },
      { key: "C", text: "Để nạp các hàm private của Merchant vào Scholar." },
      { key: "D", text: "Xóa toàn bộ các destructor của lớp cha." }
    ],
    correctAnswer: "B",
    explanation: "Khi `Merchant` và `Scholar` cùng dùng `virtual public Person`, trình biên dịch sẽ tạo ra cơ cấu đặc biệt tích hợp con trỏ liên kết rẽ nhánh ảo. Nhờ thế khi `Teacher` gom hai dòng máu thừa kế, nó chỉ giữ 1 bản thể đại diện duy nhất của ông nội `Person`, chấm dứt hoàn toàn lỗi tranh chấp mơ hồ thuộc tính (Diamond Problem).",
    difficulty: "Khó"
  },
  {
    id: "q143",
    category: Category.POLYMORPHISM,
    questionText: "Cơ chế liên kết động (Dynamic Binding) trong C++ đa hình thực chất được hiện thực hóa ở hậu trường chạy máy nhờ cấu trúc nào?",
    codeSnippet: `Base* ptr = new Derived();
ptr->draw(); // Thực hiện nhảy hàm thế nào?`,
    options: [
      { key: "A", text: "Dùng các hàm đệ quy không giới hạn dò tìm mã nguồn." },
      { key: "B", text: "Trình biên dịch dịch lại file từ đầu lúc chạy." },
      { key: "C", text: "Bảng hàm ảo vtable (Virtual Table) lưu địa chỉ các hàm ảo và con trỏ ảo vptr (Virtual Pointer) nằm kín trong mỗi đối tượng." },
      { key: "D", text: "Hệ điều hành Windows tự chuyển đổi hàm ảo sang file nén .dll." }
    ],
    correctAnswer: "C",
    explanation: "Khi một Class có hàm ảo, compiler lặng lẽ cấy vào đầu đối tượng một con trỏ ẩn gọi là `vptr`. Con trỏ này trỏ đến bảng `vtable` - một mảng tĩnh chứa các địa chỉ hàm ảo đang override hoạt động thực tế của Class đó. Khi gọi `ptr->draw();`, CPU dò tìm bảng vtable qua vptr để lấy địa chỉ hàm chính xác đang chạy và thực hiện cú nhảy.",
    difficulty: "Khó"
  },
  {
    id: "q144",
    category: Category.CONSTRUCTORS,
    questionText: "Tác dụng cực tốt của việc thêm tiền tố 'explicit' trước một Constructor một tham số (hoặc constructor có trị mặc định) trong C++ là gì?",
    codeSnippet: `class Amount {
public:
    explicit Amount(int x); // explicit ở đây mang ý nghĩa gì?
};`,
    options: [
      { key: "A", text: "Cho phép bất kỳ phương thức nào của lớp dùng chung biến toàn cục." },
      { key: "B", text: "Chặn trình biên dịch thực hiện phép ép kiểu chuyển đổi ngầm định ngoài ý muốn (Implicit Conversion), giúp loại bỏ các bẫy logic âm thầm khi truyền sai kiểu số vào đối tượng." },
      { key: "C", text: "Yêu cầu phải khai báo hàm ảo thuần khiết." },
      { key: "D", text: "Cho phép hàm này được lặp lại vô tận." }
    ],
    correctAnswer: "B",
    explanation: "Nếu không có `explicit`, trình biên dịch sẽ hồn nhiên chuyển một số nguyên `10` thành đối tượng `Amount` qua phép chuyển đổi ngầm định khi bạn gọi code kiểu `Amount a = 10;` hoặc truyền `10` vào một hàm nhận kiểu `Amount`. Thêm `explicit` sẽ ép nhà phát triển phải viết tường minh: `Amount a(10);` hoặc dùng ép kiểu rõ ràng.",
    difficulty: "Trung bình"
  },
  {
    id: "q145",
    category: Category.CONSTRUCTORS,
    questionText: "Khi nào ta dứt khoát phải tự xây dựng bộ Copy Constructor độc lập thay vì bỏ mặc cho hệ thống tự sao chép?",
    codeSnippet: `// Khi class có dính dáng tới các yếu tố sau:`,
    options: [
      { key: "A", text: "Khi class chỉ chứa các biến kiểu dữ liệu cơ bản như int, float, char." },
      { key: "B", text: "Khi class dính dáng tới việc quản lý vùng nhớ cấp phát động trên Heap thông qua con trỏ tự quản hoặc quản lý các tài nguyên đặc hữu nối tiếp." },
      { key: "C", text: "Khi class được kế thừa từ lớp ảo thuần khiết std::ostream." },
      { key: "D", text: "Khi lớp có quá nhiều phương thức static hơn bình thường." }
    ],
    correctAnswer: "B",
    explanation: "Mặc định việc copy nông chỉ lấy địa chỉ ô nhớ và trao lại cho bản thể mới. Hai con trỏ ở hai đối tượng khác nhau sẽ cùng tác động vào đúng một khối Heap nguy hại. Tạo Copy Constructor để viết mã 'new' cấp phát vùng nhớ vật lý hoàn toàn cách ly, và sao chép thủ công từng thớ dữ liệu nằm sâu bên trong (Deep Copy).",
    difficulty: "Trung bình"
  },
  {
    id: "q146",
    category: Category.CONSTRUCTORS,
    questionText: "Chạy đoạn mã nguồn này trả về kết quả cụ thể nào? Chú ý cách gán đối tượng cũ cho thực thể mới.",
    codeSnippet: `#include <iostream>
using namespace std;

class Magic {
public:
    Magic() {}
    Magic(const Magic& m) { cout << "Copy "; }
};

int main() {
    Magic m1;
    Magic m2 = m1; // Dòng lệnh này gọi hàm nào?
    return 0;
}`,
    options: [
      { key: "A", text: "Không in ra gì cả." },
      { key: "B", text: "In ra: Copy " },
      { key: "C", text: "Báo lỗi biên dịch vì m2 chưa được khởi tạo trước đó." },
      { key: "D", text: "Chương trình tự động sinh ra lỗi runtime." }
    ],
    correctAnswer: "B",
    explanation: "Dòng `Magic m2 = m1;` thực chất là khai báo một thực thể hoàn toàn mới `m2` bằng cách nạp trực tiếp giá trị của đối tượng đang tồn tại `m1`. Đây chính là phép khởi dựng sao chép (Copy Initialization), kích hoạt chạy Copy Constructor của Class và in ra chữ 'Copy ' chứ không gọi operator=. Phép gán chỉ chạy khi đối tượng đã sống từ trước.",
    difficulty: "Trung bình"
  },
  {
    id: "q147",
    category: Category.OPERATORS,
    questionText: "Nạp chồng toán tử nhập luồng dữ liệu 'operator>>' (cin) bắt buộc phải tuân thủ điều kiện cấu thành nào?",
    codeSnippet: `friend istream& operator>>(istream& in, Student& s);`,
    options: [
      { key: "A", text: "Phải được khai báo là một hàm non-member (thường là Friend) của Class, trả về kiểu istream tham chiếu và nhận tham số đầu vào là luồng istream cùng thực thể Student tham chiếu." },
      { key: "B", text: "Phải định hàm dưới dạng thuộc tính static của lớp Student." },
      { key: "C", text: "Bắt buộc phải là một phương thức ảo virtual." },
      { key: "D", text: "Phải dùng con trỏ this để đọc dữ liệu từ tệp hệ điều hành." }
    ],
    correctAnswer: "A",
    explanation: "Một phương thức trong Class bắt buộc phải có tham số vế trái có kiểu chính lớp đó. Tuy nhiên, vế trái của lệnh `cin >> s;` lại mang kiểu `std::istream`. Do đó ta tuyệt đối không thể viết `operator>>` như một phương thức bình thường của class `Student`. Ta phải viết nó ngoài Class (non-member) và dùng cơ chế `friend` để hàm này có thể thò tay đọc các thông số private của `Student`.",
    difficulty: "Khó"
  },
  {
    id: "q148",
    category: Category.ADVANCED,
    questionText: "Từ khóa 'friend' đặt trước một khai báo Hàm hoặc Class bên trong định nghĩa lớp chủ nhà mang ý nghĩa gì?",
    codeSnippet: `class Server {
    friend class Admin; // Admin là friend của Server
    int rootPassword;
};`,
    options: [
      { key: "A", text: "Admin sẽ chuyển nhượng toàn bộ biến static cho Server." },
      { key: "B", text: "Admin được cấp đặc quyền tối cao: truy cập trực tiếp tuyệt đối các thuộc tính và phương thức bảo mật 'private' và 'protected' của Server, mặc dù Admin không hề kế thừa hay thuộc về Server." },
      { key: "C", text: "Yêu cầu Server dọn dẹp biến Admin khi thoát luồng." },
      { key: "D", text: "Cả hai lớp tự động gộp thành một file nhị phân duy nhất." }
    ],
    correctAnswer: "B",
    explanation: "Cơ chế 'Bạn bè' (Friendship) là một trường hợp ngoại lệ có chủ ý phá vỡ tính đóng gói trong OOP một cách có kiểm soát. Khi class `Server` trao giữ nhãn `friend class Admin;`, nó tin cậy cho phép `Admin` xem và sửa trực tiếp các dữ liệu kín (như `rootPassword`) của mình, nâng cao tính liên kết logic chặt chẽ giữa các lớp bổ trợ.",
    difficulty: "Trung bình"
  },
  {
    id: "q149",
    category: Category.ADVANCED,
    questionText: "Mối quan hệ bạn bè 'friendship' trong kiến trúc OOP C++ có tính chất bắc cầu hay không? (Ví dụ: A là bạn của B, B lại là bạn của C. Vậy A có tự động là bạn của C hay không?)",
    codeSnippet: `// Tính chất bắc cầu của quan hệ bạn bè trong C++`,
    options: [
      { key: "A", text: "Có, các quan hệ bạn bè tự động lan tỏa khắp hệ thống." },
      { key: "B", text: "Không hề có tính chất bắc cầu lẫn đảo chiều. Nếu B coi A là bạn thì A chưa chắc coi B là bạn, và A không hề được quyền tự động can thiệp vào lớp C trừ phi được C khai báo bằng dòng lệnh tường minh 'friend class A'." },
      { key: "C", text: "Chỉ được liên thông khi cả ba lớp ở chung tệp tiêu đề." },
      { key: "D", text: "Do trình biên dịch tự động suy luận ngẫu nhiên." }
    ],
    correctAnswer: "B",
    explanation: "Triết lý bảo mật C++: 'Bạn bè không có tính bắc cầu (not transitive) và cũng không tự động đảo ngược (not symmetric)'. Sự tin cậy phải được chỉ định tường minh độc quyền bởi chính lớp chủ quản muốn bảo mật thông tin. Bạn của bạn tôi không phải là bạn tôi.",
    difficulty: "Trung bình"
  },
  {
    id: "q150",
    category: Category.POLYMORPHISM,
    questionText: "Kỹ thuật 'Object Slicing' (Cắt lát đối tượng) vô tình diễn ra trong kịch bản gán kiểu dữ liệu nào?",
    codeSnippet: `class Base { int x; };
class Derived : public Base { int y; };
void doSomething(Base obj); // Truyền tham trị!`,
    options: [
      { key: "A", text: "Ép kiểu đổi từ con trỏ sang số nguyên int thô." },
      { key: "B", text: "Hủy bỏ con trỏ ảo vtable khi di chuyển đối tượng." },
      { key: "C", text: "Khi ta cố gắng gán hoặc truyền một đối tượng lớp Con (Derived) vào một đối tượng lớp Cha (Base) dạng TRUYỀN THAM TRỊ (by value). Toàn bộ thuộc tính mở rộng độc quyền của Con bị xé bỏ hoàn toàn để vừa khít khuôn khổ Cha." },
      { key: "D", text: "Chương trình dính lỗi biên dịch không cho phép truyền đối tượng." }
    ],
    correctAnswer: "C",
    explanation: "Khi truyền tham trị `void doSomething(Base obj)`, hàm mong đợi nhận một thực thể chỉ có dung lượng bộ nhớ của lớp `Base`. Nếu ta truyền thực thể `Derived` vào, C++ chỉ sao chép phần thuộc tính kế thừa nằm ở lớp cha sang tham số `obj` và cắt bay (slice) đi toàn bộ dữ liệu mở rộng riêng cùng các liên kết đa hình ảo. Đây là một bẫy thiết kế nguy hiểm, giải quyết nhờ truyền tham chiếu hoặc con trỏ `Base&` / `Base*`.",
    difficulty: "Khó"
  }
];
