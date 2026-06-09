/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Question } from "../types";

export const BATCH2_QUESTIONS: Question[] = [
  {
    id: "q26",
    category: Category.BASICS,
    questionText: "Kích thước (sizeof) của một Lớp trống (không khai báo bất kỳ thuộc tính hay phương thức nào) trong C++ là bao nhiêu byte?",
    codeSnippet: `class EmptyClass {};
// sizeof(EmptyClass) bằng bao nhiêu?`,
    options: [
      { key: "A", text: "0 byte (vì không hề tốn bộ nhớ lưu trữ)" },
      { key: "B", text: "1 byte (để hệ thống cấp phát một địa chỉ duy nhất không trùng lặp cho đối tượng)" },
      { key: "C", text: "4 byte (kích thước mặc định của một từ đơn máy tính)" },
      { key: "D", text: "Tùy thuộc vào trình biên dịch cụ thể (undefined behavior)" }
    ],
    correctAnswer: "B",
    explanation: "Trong C++, một lớp trống luôn có kích thước ít nhất là 1 byte để đảm bảo hai đối tượng khác nhau của lớp đó luôn có hai địa chỉ ô nhớ khác biệt trong RAM, giúp hệ sinh thái con trỏ và đối tượng vận hành nhất quán.",
    difficulty: "Trung bình"
  },
  {
    id: "q27",
    category: Category.CONSTRUCTORS,
    questionText: "Trong C++, thứ tự thực tế khởi tạo các thuộc tính thành viên bằng danh sách khởi tạo (Initializer List) tuân theo quy tắc nào?",
    codeSnippet: `class Demo {
    int b;
    int a;
public:
    Demo(int x) : a(x), b(a + 1) {}
};`,
    options: [
      { key: "A", text: "Khởi tạo 'a' trước rồi mới tới 'b' vì 'a' đứng trước trong initializer list." },
      { key: "B", text: "Khởi tạo 'b' trước rồi mới tới 'a' vì 'b' được khai báo trước trong định nghĩa lớp." },
      { key: "C", text: "Khởi tạo song song đồng thời cả hai thuộc tính." },
      { key: "D", text: "Lỗi biên dịch không cho phép dùng biến này khởi tạo biến kia." }
    ],
    correctAnswer: "B",
    explanation: "Đây là một bẫy kinh điển! C++ quy định thứ tự khởi tạo các thành viên tuân theo TRẬT TỰ KHAI BÁO của chúng trong định nghĩa lớp, chứ không quan tâm đến thứ tự lập trình trong danh sách khởi tạo. Ở mã nguồn trên, 'b' khai báo trước 'a' nên 'b' được khởi tạo trước bằng 'a + 1' (lúc này 'a' chưa có giá trị định dạng cụ thể, dẫn đến b mang rác hệ thống). Do đó, cần đồng nhất thứ tự khai báo và initializer list để tránh đại họa.",
    difficulty: "Khó"
  },
  {
    id: "q28",
    category: Category.CONSTRUCTORS,
    questionText: "Từ khóa 'explicit' áp dụng trước một Constructor trong C++ nhằm mục đích gì?",
    codeSnippet: `class Distance {
public:
    explicit Distance(int meters) {}
};
// Distance d = 10; // Có hợp lệ không?`,
    options: [
      { key: "A", text: "Cho phép Constructor này được thừa kế bởi con." },
      { key: "B", text: "Ngăn chặn trình biên dịch tự động thực hiện ép kiểu ngầm định (implicit conversion) một tham số thành đối tượng." },
      { key: "C", text: "Bắt buộc Constructor này phải giải phóng vùng nhớ tự động." },
      { key: "D", text: "Cho phép gọi constructor mà không cần mở ngoặc nhọn." }
    ],
    correctAnswer: "B",
    explanation: "Mặc định, các Constructor nhận một tham số có thể được dùng để chuyển đổi kiểu ngầm định (ví dụ `Distance d2 = 10;`). Từ khóa `explicit` tắt cơ chế này, bắt buộc lập trình viên phải gọi một cách tường minh `Distance d2(10);` hoặc `static_cast<Distance>(10);` để tránh các lỗi logic tiềm tàng ngoài mong muốn.",
    difficulty: "Khó"
  },
  {
    id: "q29",
    category: Category.BASICS,
    questionText: "Từ khóa 'mutable' làm gì khi đặt trước thuộc tính của một lớp?",
    codeSnippet: `class Test {
    mutable int x;
    int y;
public:
    void update() const {
        x = 10; // Có lỗi không?
        y = 20; // Có lỗi không?
    }
};`,
    options: [
      { key: "A", text: "Dòng x = 10 lỗi, y = 20 bình thường." },
      { key: "B", text: "Cả hai dòng đều biên dịch bình thường." },
      { key: "C", text: "Dòng x = 10 biên dịch bình thường, dòng y = 20 bị lỗi biên dịch." },
      { key: "D", text: "Không được đặt từ khóa mutable trong lớp." }
    ],
    correctAnswer: "C",
    explanation: "Trong C++, một hằng phương thức (const member function) như `update() const` cam kết không chỉnh sửa bất kỳ thuộc tính nào của đối tượng. Tuy nhiên, nếu thuộc tính đó được đánh dấu là `mutable`, nó sẽ được phép chỉnh sửa tự do ngay cả bên trong các hàm hằng const. Biến `y` không có `mutable` nên cố chuyển trị sẽ sinh lỗi lập tức.",
    difficulty: "Khó"
  },
  {
    id: "q30",
    category: Category.BASICS,
    questionText: "Một Hằng đối tượng (const object) có thể gọi được phương thức nào của lớp đó?",
    codeSnippet: `class Student {
public:
    void print1() {}
    void print2() const {}
};
// 	const Student st;
//	st.[Hàm nào?]`,
    options: [
      { key: "A", text: "Mọi phương thức công khai (public) của lớp." },
      { key: "B", text: "Chỉ các phương thức static." },
      { key: "C", text: "Chỉ các phương thức được khai báo có từ khóa const ở cuối phương thức đó." },
      { key: "D", text: "Chỉ các phương thức phi-static và không ảo." }
    ],
    correctAnswer: "C",
    explanation: "Hằng đối tượng (`const object`) chỉ được phép thực thi các hằng phương thức (`const member functions`) của lớp. Trình biên dịch sẽ chặn tất cả cuộc gọi tới các phương thức không đuôi `const` vì chúng có rủi ro làm biến đổi dữ liệu trạng thái hằng.",
    difficulty: "Trung bình"
  },
  {
    id: "q31",
    category: Category.CONSTRUCTORS,
    questionText: "Nếu một lớp định nghĩa một Constructor có tham số, trình biên dịch có tự động sinh ra Default Constructor (Hàm khởi tạo mặc định không đối số) nữa không?",
    codeSnippet: `class Cat {
public:
    Cat(string name) {}
};
// Cat myCat; // Có lỗi không?`,
    options: [
      { key: "A", text: "Có, trình biên dịch luôn luôn tạo ra Default Constructor dù bạn viết thế nào." },
      { key: "B", text: "Không, trình biên dịch sẽ không tự động tạo ra nữa. Khai báo Cat myCat; sẽ bị báo lỗi biên dịch." },
      { key: "C", text: "Có sinh ra, nhưng nó sẽ được đánh dấu là private." },
      { key: "D", text: "Chỉ tự sinh nếu tắt tính năng tối ưu mã nguồn." }
    ],
    correctAnswer: "B",
    explanation: "Khi lập trình viên tự tay viết bất kỳ hàm khởi tạo nào (dù là copy constructor hay hàm khởi tạo có tham số), trình biên dịch C++ sẽ HOÀN TOÀN dừng việc tự sinh Default Constructor ngầm định. Nếu muốn tiếp tục dùng khởi tạo mặc định không đối số, ta bắt buộc phải viết thủ công hoặc viết thêm `Cat() = default;` (C++11).",
    difficulty: "Dễ"
  },
  {
    id: "q32",
    category: Category.CONSTRUCTORS,
    questionText: "Phương pháp dọn dẹp nào là hoàn toàn chính xác để tránh rò rỉ bộ nhớ khi hủy một mảng đối tượng cấp phát động?",
    codeSnippet: `MyClass* ptr = new MyClass[10];
// Giải phóng thế nào?`,
    options: [
      { key: "A", text: "delete ptr;" },
      { key: "B", text: "free(ptr);" },
      { key: "C", text: "delete[] ptr;" },
      { key: "D", text: "delete[10] ptr;" }
    ],
    correctAnswer: "C",
    explanation: "Mọi đối tượng tạo bằng toán tử `new[]` cần được thu hồi đồng bộ bằng toán tử `delete[]`. Sử dụng `delete[] ptr;` giúp trình biên dịch dò tìm thông tin số chiều mảng để kích hoạt đầy đủ 10 lần hàm hủy (destructor) của 10 thực thể. Dùng `delete` thường sẽ chỉ hủy phần tử đầu tiên, gây lỗi rò rỉ hoặc nghẽn runtime tồi tệ.",
    difficulty: "Dễ"
  },
  {
    id: "q33",
    category: Category.CONSTRUCTORS,
    questionText: "Mã nguồn dưới đây thực hiện phép sao chép nông (shallow copy) hay sâu (deep copy) và dẫn tới hiện tượng gì?",
    codeSnippet: `class Box {
    int* data;
public:
    Box(int val) { data = new int(val); }
    Box(const Box& other) {
        data = other.data; // Phép gán ở đây?
    }
    ~Box() { delete data; }
};`,
    options: [
      { key: "A", text: "Đọc sao chép sâu (Deep copy), hoạt động hoàn hảo." },
      { key: "B", text: "Sao chép nông (Shallow copy), dẫn tới hai đối tượng cùng trỏ tới 1 ô nhớ. Khi vùng hủy chạy sẽ lỗi 'Double Free' giải phóng ô nhớ hai lần gây sập chương trình." },
      { key: "C", text: "Lỗi cú pháp vì không khai báo thư viện pointer." },
      { key: "D", text: "Sao chép nông nhưng C++ tự gom RAM sạch sẽ không gây lỗi gì." }
    ],
    correctAnswer: "B",
    explanation: "Địa chỉ con trỏ `data` được dán trực tiếp qua phép gán `data = other.data` (Shallow copy) thay vì sao chép lõi giá trị lưu của nó (`data = new int(*other.data)`). Khi hai Box cùng chứa chung một địa chỉ, Box đầu tiên trôi khỏi phạm vi hủy sẽ dọn ô nhớ đó. Khi Box thứ hai tiếp tục dọn ô nhớ rỗng này sẽ bị crash hệ thống do lỗi Double Free nguy hiểm.",
    difficulty: "Khó"
  },
  {
    id: "q34",
    category: Category.BASICS,
    questionText: "Làm thế nào để khởi tạo một thuộc tính tĩnh (static member variable) đúng luật trong C++?",
    codeSnippet: `class Server {
    static int port;
};`,
    options: [
      { key: "A", text: "Gán giá trị ngay trong lòng class: static int port = 80;" },
      { key: "B", text: "Khởi tạo bằng danh sách khởi tạo của Constructor lớp Server." },
      { key: "C", text: "Định nghĩa và khởi tạo bên ngoài khai báo lớp (trong file .cpp tương ứng): int Server::port = 80;" },
      { key: "D", text: "Biến tĩnh tự hoạt động không cần bất cứ khai báo hay khởi tạo nào." }
    ],
    correctAnswer: "C",
    explanation: "Trừ trường hợp hằng số nguyên tĩnh hữu hạn (`static const int` hoặc dùng `constexpr`), tất cả biến tĩnh của một lớp C++ chỉ được khai báo trong lòng lớp đó, nhưng bắt buộc định nghĩa và cấp phát bộ nhớ vật lý bên ngoài class bằng toán tử định phạm vi cú pháp `int Server::port = 80;`.",
    difficulty: "Trung bình"
  },
  {
    id: "q35",
    category: Category.INHERITANCE,
    questionText: "Khi con kế thừa hằng public từ cha, các thành viên protected của cha có phạm vi truy cập thế nào bên trong lớp con và bên ngoài lớp con?",
    codeSnippet: `class Parent {
protected:
    int id;
};
class Child : public Parent {};`,
    options: [
      { key: "A", text: "Trong lớp con không gọi được, ngoài lớp con cũng không." },
      { key: "B", text: "Trong lớp con gọi trực tiếp thoải mái, nhưng ngoài lớp con (như hàm main) không thể truy xuất trực tiếp." },
      { key: "C", text: "Lớp con và mọi nơi bên ngoài đều thừa hưởng thành public tự do sử dụng." },
      { key: "D", text: "Trở thành private trong lớp con." }
    ],
    correctAnswer: "B",
    explanation: "Tính chất của phạm vi `protected` cho phép lớp con kế thừa trực tiếp được quyền sử dụng các thuộc tính/hành vi này như đang đóng gói tại chính thân mình. Nhưng đối với tất cả những mã độc lập bên ngoài (hàm main, các lớp khác), protected đóng vai trò giống như private, ngăn chặn toàn bộ hành vi xâm lấn.",
    difficulty: "Dễ"
  },
  {
    id: "q36",
    category: Category.INHERITANCE,
    questionText: "Trong C++11, chúng ta có thể kế thừa (inherit) trực tiếp toàn bộ các Constructor của lớp cha mà không cần viết lại mã nguồn bằng cách dùng chỉ thị nào?",
    codeSnippet: `class Base {
public:
    Base(int x) {}
    Base(double y) {}
};
class Derived : public Base {
    // Chỉ thị kế thừa constructor?
};`,
    options: [
      { key: "A", text: "using Base::Base;" },
      { key: "B", text: "inherits Base::Base;" },
      { key: "C", text: "Base::Base() = default;" },
      { key: "D", text: "Derived : public Base = auto;" }
    ],
    correctAnswer: "A",
    explanation: "Từ C++11, chỉ thị `using Base::Base;` cho phép lớp con Derived thừa hưởng toàn bộ các Constructor quá tải của lớp cha Base một cách tự động, giúp giảm bớt nhiều nỗ lực boilerplate code của lập trình viên.",
    difficulty: "Trung bình"
  },
  {
    id: "q37",
    category: Category.CONSTRUCTORS,
    questionText: "Đoạn mã dưới đây sử dụng kỹ thuật gọi chéo hàm khởi tạo nào có sẵn của C++11?",
    codeSnippet: `class Target {
    int x;
public:
    Target() : Target(42) {} // Gọi constructor khác
    Target(int val) : x(val) {}
};`,
    options: [
      { key: "A", text: "Constructor đệ quy vô tận." },
      { key: "B", text: "Ủy nhiệm khởi tạo (Delegating Constructor), cho phép Constructor này chuyển giao trách nhiệm gọi cho một Constructor khác cùng lớp." },
      { key: "C", text: "Kế thừa Constructor từ lớp cha." },
      { key: "D", text: "Copy Constructor ngầm định." }
    ],
    correctAnswer: "B",
    explanation: "Kỹ thuật ủy nhiệm khởi tạo (Delegating Constructor) xuất hiện từ C++11, cho phép một hàm khởi tạo không đối số hoặc ít đối số gọi trực tiếp một hàm khởi tạo chính trong cùng một Class tại danh sách khởi tạo mục đích tái chế logic.",
    difficulty: "Trung bình"
  },
  {
    id: "q38",
    category: Category.INHERITANCE,
    questionText: "Mã nguồn dưới đây in ra thông tin nào? Chú ý hành vi Name Hiding (Ẩn phương thức) trong kế thừa C++.",
    codeSnippet: `#include <iostream>
using namespace std;

class Parent {
public:
    void print() { cout << "Parent"; }
};
class Child : public Parent {
public:
    void print(string msg) { cout << msg; }
};

int main() {
    Child c;
    c.print(); // Gọi lệnh này biên dịch thế nào?
    return 0;
}`,
    options: [
      { key: "A", text: "Biên dịch thành công và in ra 'Parent'." },
      { key: "B", text: "Lỗi biên dịch: Lớp Child đã định nghĩa print(string) khiến print() không tham số của Parent bị che lấp (hidden) hoàn toàn." },
      { key: "C", text: "Lỗi biên dịch vì trùng tên hàm trong quan hệ kế thừa công khai." },
      { key: "D", text: "Chương trình in ra rác màn hình." }
    ],
    correctAnswer: "B",
    explanation: "Trong C++, khi lớp con định nghĩa một hàm trùng tên với hàm của lớp cha nhưng khác danh sách đối số, hành vi này KHÔNG phải là Overloading bình thường mà gọi là 'Name Hiding' (Che khuất tên). Mặc định, hàm `print(string)` của lớp con làm ẩn toàn bộ các hàm mang tên `print` của lớp cha. Do vậy lệnh `c.print()` bị lỗi biên dịch vì lớp Child chỉ nhìn thấy hàm `print(string)`. Để khắc phục, ta phải thêm `using Parent::print;` vào lớp Child.",
    difficulty: "Khó"
  },
  {
    id: "q39",
    category: Category.INHERITANCE,
    questionText: "Khi viết Constructor cho lớp con, làm thế nào để truyền giá trị tham số cho Constructor của lớp cha đúng cách?",
    codeSnippet: `class Parent {
public:
    Parent(int val) {}
};
class Child : public Parent {
public:
    // Định nghĩa constructor con thế nào?
};`,
    options: [
      { key: "A", text: "Child(int v) { Parent(v); }" },
      { key: "B", text: "Child(int v) : Parent(v) {}" },
      { key: "C", text: "Child(int v) { super(v); }" },
      { key: "D", text: "Child(int v) : super(v) {}" }
    ],
    correctAnswer: "B",
    explanation: "Trong C++, ta phải chỉ định rõ việc gọi Constructor của lớp cha tại danh sách khởi tạo (Initializer List) của lớp con: `Child(int v) : Parent(v) {}`. Cách tiếp cận như `Parent(v)` bên trong thân hàm `{}` sẽ tạo ra một đối tượng tạm thời vô danh rồi hủy ngay lập tức chứ không liên kết gì với việc khởi dựng thuộc tinh kế thừa của lớp hiện tại.",
    difficulty: "Dễ"
  },
  {
    id: "q40",
    category: Category.BASICS,
    questionText: "Nếu chúng ta tạo một mảng mười đối tượng 'Demo d[10];' động hoặc tĩnh, Constructor nào sẽ được kích hoạt cho từng phần tử?",
    codeSnippet: `class Demo {
public:
    Demo() { cout << "A"; }
    Demo(int x) { cout << "B"; }
};
Demo list[10];`,
    options: [
      { key: "A", text: "Constructor có tham số Demo(int x) được gọi 10 lần." },
      { key: "B", text: "Chỉ phần tử đầu tiên kích hoạt Constructor." },
      { key: "C", text: "Constructor mặc định (Default Constructor) Demo() được gọi 10 lần." },
      { key: "D", text: "Không có bất cứ Constructor nào chạy tại mảng tĩnh." }
    ],
    correctAnswer: "C",
    explanation: "Khi một mảng các đối tượng được khởi tạo mà không chỉ định danh sách giá trị cụ thể, C++ bắt buộc phải dùng Default Constructor (hàm khởi tạo không tham số) để thiết lập trạng thái ban đầu ổn định cho từng phần tử. Vì thế, `Demo()` sẽ được gọi đúng 10 lần, in ra 'AAAAAAAAAA'.",
    difficulty: "Dễ"
  },
  {
    id: "q41",
    category: Category.BASICS,
    questionText: "Trong Lập trình hướng đối tượng, việc che giấu thông tin nội bộ còn giúp giảm thiểu sự ràng buộc giữa các module. Khái niệm này gọi là gì?",
    codeSnippet: `// Khái niệm kiến trúc phần mềm`,
    options: [
      { key: "A", text: "Tính gắn kết yếu (Loose Coupling)" },
      { key: "B", text: "Tính kết dính chặt (Tight Coupling)" },
      { key: "C", text: "Đa luồng đồng bộ" },
      { key: "D", text: "Lập trình đối xứng" }
    ],
    correctAnswer: "A",
    explanation: "Tính gắn kết yếu (Loose Coupling) là một tiêu chí thiết kế hàng đầu của OOP. Nhờ che giấu chi tiết cài đặt và đóng gói an toàn bằng các Interface tốt, sự thay đổi mã phức tạp bên trong một Class không làm ảnh hưởng dây chuyền đến các lớp phụ thuộc bên ngoài.",
    difficulty: "Trung bình"
  },
  {
    id: "q42",
    category: Category.CONSTRUCTORS,
    questionText: "Đâu là cách khai báo chuẩn cho một Copy Constructor trong một lớp tên là MyClass?",
    codeSnippet: `// Chọn khai báo tham số tối ưu`,
    options: [
      { key: "A", text: "MyClass(MyClass other);" },
      { key: "B", text: "MyClass(MyClass* other);" },
      { key: "C", text: "MyClass(const MyClass& other);" },
      { key: "D", text: "MyClass(const MyClass other) const;" }
    ],
    correctAnswer: "C",
    explanation: "Copy Constructor bắt buộc phải truyền bằng tham chiếu hằng: `MyClass(const MyClass& other)`. Nếu truyền bằng tham trị `MyClass(MyClass other)`, để truyền tham số đó vào hàm, hệ thống lại cần gọi một copy constructor khác, tạo thành một chu kỳ gọi đệ quy vô tận và làm đầy phân mảnh Stack.",
    difficulty: "Trung bình"
  },
  {
    id: "q43",
    category: Category.CONSTRUCTORS,
    questionText: "Constructor nào sau đây thực hiện cơ chế tối ưu của C++11 để chuyển giao quyền sở hữu tài nguyên động thay vì nhân bản trị?",
    codeSnippet: `MyClass(MyClass&& other) noexcept; // Cú pháp gì?`,
    options: [
      { key: "A", text: "Copy Constructor" },
      { key: "B", text: "Move Constructor (Khởi tạo di chuyển)" },
      { key: "C", text: "Default Constructor" },
      { key: "D", text: "Hàm hủy ảo thuần khiết" }
    ],
    correctAnswer: "B",
    explanation: "Kí tự `&&` biểu diễn con trỏ tham chiếu Rvalue (Rvalue reference). `MyClass(MyClass&& other)` là Move Constructor (Hàm khởi tạo di chuyển). Nó cho phép 'đánh cắp' địa chỉ vùng nhớ động của đối tượng sắp bị hủy và gán thẳng sang đối tượng đích mà không cần sao chép tốn kém hiệu năng CPU.",
    difficulty: "Khó"
  },
  {
    id: "q44",
    category: Category.BASICS,
    questionText: "Trong C++, từ khóa private giới hạn truy xuất của các thuộc tính trong phạm vi nào?",
    codeSnippet: `class Secret {
private:
    int key;
};`,
    options: [
      { key: "A", text: "Chỉ cho phép truy xuất từ chính lớp đó và các hàm bạn (friend)." },
      { key: "B", text: "Chỉ cho phép truy xuất từ chính lớp đó và các lớp con kế thừa công khai." },
      { key: "C", text: "Cho phép truy cập tự do từ cùng một Package thư mục con." },
      { key: "D", text: "Bất kỳ tập tin nguồn nào gộp thư viện vào." }
    ],
    correctAnswer: "A",
    explanation: "Quyền truy cập `private` bảo vệ các thuộc tính hoàn toàn riêng tư. Chỉ có các phương thức nằm trong lòng lớp đó hoặc các Hàm bạn/Lớp bạn được đánh dấu tường minh mới có quyền thâm nhập vào.",
    difficulty: "Dễ"
  },
  {
    id: "q45",
    category: Category.INHERITANCE,
    questionText: "Khi một lớp con kế thừa 'private' từ lớp cha, các thành viên 'public' của lớp cha trở thành gì ở lớp con?",
    codeSnippet: `class Shape {};
class Circle : private Shape {};`,
    options: [
      { key: "A", text: "public" },
      { key: "B", text: "protected" },
      { key: "C", text: "private" },
      { key: "D", text: "Không thể kế thừa được nữa" }
    ],
    correctAnswer: "C",
    explanation: "Với phép kế thừa private (`: private Base`), tất cả thành viên của cha (public hay protected) khi trôi xuống con đều bị thắt chặt và đóng kín thành private của con. Thế hệ cháu kế thừa tiếp từ lớp con này cũng sẽ hoàn toàn mù tịt về các thuộc tính ban sơ của lớp ông nội.",
    difficulty: "Trung bình"
  },
  {
    id: "q46",
    category: Category.CONSTRUCTORS,
    questionText: "Trong mối quan hệ đa kế thừa, khi lớp Child kế thừa theo thứ tự: 'class Child : public First, public Second {};' thì Constructor nào chạy trước?",
    codeSnippet: `class First {};
class Second {};
class Child : public First, public Second {};`,
    options: [
      { key: "A", text: "Hệ thống biên dịch gọi Constructor Second trước rồi đến First." },
      { key: "B", text: "Hệ thống gọi Constructor First trước rồi tới Second theo thứ tự liệt kê kế thừa." },
      { key: "C", text: "Tùy thuộc vào thứ tự gọi của danh sách khởi tạo." },
      { key: "D", text: "Cả hai Constructor chạy cùng lúc." }
    ],
    correctAnswer: "B",
    explanation: "Trong đa kế thừa C++, thứ tự thực thi các Constructor của các lớp cha cơ sở được quyết định chặt chẽ bởi THỨ TỰ KHAI BÁO KẾ THỪA (từ trái qua phải sau dấu hai chấm), chứ không phụ thuộc vào thứ tự khai báo trong initializer list của constructor.",
    difficulty: "Khó"
  },
  {
    id: "q47",
    category: Category.CONSTRUCTORS,
    questionText: "Bản chất việc khai báo một Constructor trong vùng 'private' của lớp nhằm mục đích thiết kế mô hình kiến trúc nào?",
    codeSnippet: `class Singleton {
private:
    Singleton() {} // Private Constructor
};`,
    options: [
      { key: "A", text: "Ngăn chặn hoàn toàn việc nhân bản đối tượng tự do và phục vụ việc xây dựng Singleton Pattern (mỗi hệ thống chỉ có độc bản 1 đối tượng duy nhất)." },
      { key: "B", text: "Bắt buộc đối tượng phải được tạo từ Stack rỗng." },
      { key: "C", text: "Lỗi thiết kế, vì không thể tạo được đối tượng nào cả." },
      { key: "D", text: "Tiết kiệm 100% dung lượng RAM." }
    ],
    correctAnswer: "A",
    explanation: "Thiết kế private Constructor biến lớp thành vùng kín, thế giới bên ngoài không thể khởi tạo đối tượng bằng cách gọi `Singleton item;` hoặc `new Singleton();`. Thay vào đó, lớp sẽ cung cấp một hàm tĩnh (static function) để kiểm soát nghiêm ngặt và phân phối đúng một thực thể độc nhất trong dòng thời gian runtime.",
    difficulty: "Khó"
  },
  {
    id: "q48",
    category: Category.INHERITANCE,
    questionText: "Con trỏ lớp cha có thể tham chiếu trực tiếp đến đối tượng của lớp con, hành vi ép kiểu ngầm định này gọi là gì?",
    codeSnippet: `Base* ptr = new Derived(); // Hợp lệ không?`,
    options: [
      { key: "A", text: "Downcasting" },
      { key: "B", text: "Upcasting (Ép kiểu hướng lên)" },
      { key: "C", text: "Object Slicing" },
      { key: "D", text: "Crosscasting" }
    ],
    correctAnswer: "B",
    explanation: "Upcasting (Ép kiểu hướng lên) cho phép gán gián tiếp địa chỉ con trỏ con về kiểu dữ liệu cha cơ sở của nó một cách an toàn và tự động mà không cần thực hiện bất cứ phép ép kiểu thủ công nào. Đây chính là động cơ khởi nạp sự đa hình OOP.",
    difficulty: "Trung bình"
  },
  {
    id: "q49",
    category: Category.INHERITANCE,
    questionText: "Ngược lại, để ép kiểu một con trỏ Cha về con trỏ Con một cách an toàn tại RUNTIME (tránh crash khi trỏ nhầm), ta phải dùng toán tử cơ chế RTTI nào?",
    codeSnippet: `Base* b = new Derived();
Derived* d = [Toán tử?]<Derived*>(b);`,
    options: [
      { key: "A", text: "static_cast" },
      { key: "B", text: "reinterpret_cast" },
      { key: "C", text: "dynamic_cast" },
      { key: "D", text: "const_cast" }
    ],
    correctAnswer: "C",
    explanation: "dynamic_cast sử dụng thông tin kiểu dữ liệu runtime (RTTI) của C++ để kiểm tra xem con trỏ cha thực thế có trỏ tới đối tượng con mong muốn hay không. Nếu kiểm thử thất bại (b không phải Derived), dynamic_cast sẽ trả về giá trị NULL (hoặc ném ngoại lệ nếu ép kiểu dạng tham chiếu) để bảo đảm dòng code xử lý an toàn.",
    difficulty: "Khó"
  },
  {
    id: "q50",
    category: Category.BASICS,
    questionText: "Trong cấu trúc của Struct trong C++, quyền truy cập mặc định của các thành viên là gì?",
    codeSnippet: `struct Person {
    string name; // Quyền truy cập gì?
};`,
    options: [
      { key: "A", text: "Mặc định là private giống hệt Class." },
      { key: "B", text: "Mặc định là protected." },
      { key: "C", text: "Mặc định là public." },
      { key: "D", text: "Không có định nghĩa quyền truy cập trong Struct." }
    ],
    correctAnswer: "C",
    explanation: "Điểm phân tách duy nhất về mặt kỹ thuật giữa Struct và Class trong C++ đó là Struct mặc định có quyền truy cập thành viên và kế thừa mặc định là PUBLIC, trong khi Class mặc định là PRIVATE. Còn lại cả hai cấu trúc đều hỗ trợ đầy đủ Constructor, Destructor, Methods và Polymorphism.",
    difficulty: "Dễ"
  }
];
