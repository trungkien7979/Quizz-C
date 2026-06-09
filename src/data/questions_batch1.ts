/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Question } from "../types";

export const BATCH1_QUESTIONS: Question[] = [
  {
    id: "q1",
    category: Category.BASICS,
    questionText: "Trong C++, khai báo lớp (class) kết thúc bằng ký tự nào sau đây?",
    codeSnippet: `class MyClass {
    // Thuộc tính và phương thức
}; // <-- Ký tự kết thúc là gì?`,
    options: [
      { key: "A", text: "Dấu chấm phẩy (;)" },
      { key: "B", text: "Dấu ngoặc đóng (})" },
      { key: "C", text: "Không có ký tự đặc biệt nào" },
      { key: "D", text: "Dấu hai chấm (:)" }
    ],
    correctAnswer: "A",
    explanation: "Cú pháp định nghĩa lớp trong C++ bắt buộc phải kết thúc bằng dấu chấm phẩy (;) ngay sau dấu ngoặc nhọn đóng. Nếu thiếu dấu chấm phẩy này, trình biên dịch sẽ tạo ra lỗi cú pháp (Syntax Error).",
    difficulty: "Dễ"
  },
  {
    id: "q2",
    category: Category.BASICS,
    questionText: "Mặc định, các thành viên (thuộc tính/phương thức) khai báo trong một Lớp (Class) mà không có từ khóa phạm vi sẽ có quyền truy cập nào?",
    codeSnippet: `class MyClass {
    int value; // Quyền truy cập gì?
    void show(); // Quyền truy cập gì?
};`,
    options: [
      { key: "A", text: "public" },
      { key: "B", text: "protected" },
      { key: "C", text: "private" },
      { key: "D", text: "Cả A, B, C đều sai" }
    ],
    correctAnswer: "C",
    explanation: "Đối với cấu trúc lớp (class) trong C++, các thành viên không khai báo rõ quyền truy cập mặc định sẽ là private. Trái lại, đối với cấu trúc struct, các thành viên mặc định sẽ là public.",
    difficulty: "Dễ"
  },
  {
    id: "q3",
    category: Category.BASICS,
    questionText: "Phương thức tĩnh (static member function) trong C++ có đặc điểm nào dưới đây?",
    codeSnippet: `class Counter {
    static int count;
public:
    static int getCount() {
        return count;
    }
};`,
    options: [
      { key: "A", text: "Có thể truy cập trực tiếp các thành viên dữ liệu không tĩnh (non-static) của lớp." },
      { key: "B", text: "Chỉ có thể truy cập các thành viên dữ liệu tĩnh (static) và hàm tĩnh của lớp đó." },
      { key: "C", text: "Có chứa con trỏ 'this' ẩn chỉ tới đối tượng hiện tại." },
      { key: "D", text: "Có thể là một phương thức ảo (virtual function)." }
    ],
    correctAnswer: "B",
    explanation: "Phương thức tĩnh không thuộc về bất cứ thực thể đối tượng cụ thể nào mà thuộc về toàn bộ lớp. Do đó, nó KHÔNG có con trỏ 'this' ẩn và KHÔNG THỂ truy cập các thành viên dữ liệu phi tĩnh trực tiếp mà chỉ có thể truy cập các thành viên và hàm tĩnh khác.",
    difficulty: "Trung bình"
  },
  {
    id: "q4",
    category: Category.CONSTRUCTORS,
    questionText: "Thứ tự gọi các hàm thiết lập (constructor) khi khởi tạo một đối tượng của lớp con kế thừa từ lớp cha là gì?",
    codeSnippet: `class Parent {};
class Child : public Parent {};
// Khi khởi tạo: Child obj;`,
    options: [
      { key: "A", text: "Constructor lớp Child chạy trước, sau đó tới Constructor lớp Parent." },
      { key: "B", text: "Chỉ Constructor lớp Child chạy, Constructor Parent không chạy trừ khi gọi tường minh." },
      { key: "C", text: "Constructor lớp Parent chạy trước, sau đó tới Constructor lớp Child." },
      { key: "D", text: "Cả hai Constructor chạy song song cùng lúc." }
    ],
    correctAnswer: "C",
    explanation: "Khi khởi tạo đối tượng của lớp con, môi trường C++ cần hoàn thiện phần nền móng của lớp cha trước. Do đó, Constructor lớp Parent luôn được biên dịch và gọi trước Constructor lớp Child. Về hàm hủy (destructor), thứ tự này sẽ đảo ngược ngược lại (Child trước rồi mới tới Parent).",
    difficulty: "Dễ"
  },
  {
    id: "q5",
    category: Category.CONSTRUCTORS,
    questionText: "Đặc điểm nào sau đây KHÔNG ĐÚNG đối với hàm hủy (Destructor)?",
    codeSnippet: `class MyClass {
public:
    ~MyClass() { // Destructor
        // Giải phóng bộ nhớ
    }
};`,
    options: [
      { key: "A", text: "Có thể có tham số và được nạp chồng (overload)." },
      { key: "B", text: "Tên hàm trùng với tên lớp và bắt đầu bằng ký tự ~." },
      { key: "C", text: "Không có giá trị trả về (kể cả void)." },
      { key: "D", text: "Chỉ có duy nhất một hàm hủy trong một lớp." }
    ],
    correctAnswer: "A",
    explanation: "Hàm hủy (Destructor) KHÔNG bao giờ cho phép nhận tham số, do đó cũng KHÔNG thể nạp chồng (overload) được. Mỗi lớp chỉ có duy nhất một hàm hủy xử lý việc giải phóng tài nguyên khi đối tượng bị tiêu hủy.",
    difficulty: "Dễ"
  },
  {
    id: "q6",
    category: Category.CONSTRUCTORS,
    questionText: "Khi nào hàm thiết lập sao chép (Copy Constructor) được gọi tự động?",
    codeSnippet: `class Sample {};
void tempFunc(Sample s) {} // Tham số truyền trị
Sample test() {
    Sample localObj;
    return localObj; // Trả về trị
}`,
    options: [
      { key: "A", text: "Khi gán hai đối tượng hiện có cho nhau (ví dụ: a = b;)" },
      { key: "B", text: "Khi truyền đối tượng vào một hàm theo dạng tham trị (pass-by-value)." },
      { key: "C", text: "Khi một đối tượng mới được khởi tạo bằng bản sao của đối tượng khác (ví dụ: Sample a = b;)" },
      { key: "D", text: "Cả B và C đều đúng." }
    ],
    correctAnswer: "D",
    explanation: "Hàm thiết lập sao chép (Copy Constructor) được gọi khi tạo mới một đối tượng từ một đối tượng hiện có (ví dụ: Sample a = b; hoặc Sample a(b);) và khi truyền một đối tượng vào hàm theo tham số tham trị (pass-by-value) hoặc trả về đối tượng từ hàm theo tham trị. Việc gán hai đối tượng đã tồn tại (a = b;) sẽ gọi 'toán tử gán' (assignment operator) chứ không gọi copy constructor.",
    difficulty: "Khó"
  },
  {
    id: "q7",
    category: Category.INHERITANCE,
    questionText: "Nếu một lớp B kế thừa 'protected' từ lớp cha A, thì thành viên 'public' của lớp A trở thành loại thành viên nào của lớp B?",
    codeSnippet: `class A {
public:
    int x;
};
class B : protected A {
    // Thành viên x của A trở thành phạm vi nào ở đây?
};`,
    options: [
      { key: "A", text: "public" },
      { key: "B", text: "protected" },
      { key: "C", text: "private" },
      { key: "D", text: "Không thể truy cập được từ B" }
    ],
    correctAnswer: "B",
    explanation: "Quy tắc kế thừa phạm vi: Khi kế thừa kiểu 'protected', các thành viên public và protected của lớp cha đều trở thành 'protected' của lớp con. Thành viên private của cha vẫn giữ nguyên private của cha (con không truy cập trực tiếp được).",
    difficulty: "Trung bình"
  },
  {
    id: "q8",
    category: Category.INHERITANCE,
    questionText: "Xem mã nguồn bên dưới. Lớp Dog kế thừa Animal theo kiểu private. Lệnh in ra d.getInfo() trong hàm main có biên dịch được không? Vì sao?",
    codeSnippet: `class Animal {
public:
    void getInfo() { cout << "Animal Info"; }
};
class Dog : private Animal { };

int main() {
    Dog d;
    d.getInfo(); // Biên dịch dòng này có lỗi không?
    return 0;
}`,
    options: [
      { key: "A", text: "Có lỗi biên dịch, vì getInfo() trở thành thành viên private trong Dog và không thể gọi ngoài Dog." },
      { key: "B", text: "Biên dịch thành công và in ra 'Animal Info'." },
      { key: "C", text: "Biên dịch thành công, nhưng kết quả không hiển thị gì cả do lỗi runtime." },
      { key: "D", text: "Có lỗi vì lớp Animal không có thuộc tính." }
    ],
    correctAnswer: "A",
    explanation: "Khi kế thừa kiểu 'private', mọi thành viên public của lớp cha Animal sẽ trở thành private của lớp con Dog. Lệnh `d.getInfo()` trong hàm main cố gắng gọi một thành viên private từ ngoài lớp Dog, gây ra lỗi biên dịch: 'getInfo is inaccessible within this context'.",
    difficulty: "Trung bình"
  },
  {
    id: "q9",
    category: Category.POLYMORPHISM,
    questionText: "Hàm ảo (virtual function) trong C++ được khai báo bằng từ khóa nào và sử dụng nhằm mục đích gì?",
    codeSnippet: `class Base {
public:
    virtual void show() { cout << "Base"; }
};`,
    options: [
      { key: "A", text: "Sử dụng từ khóa 'virtual', để định nghĩa một phương thức ở lớp cha và cho phép lớp con định nghĩa lại (override) để đạt được đa hình động tại runtime." },
      { key: "B", text: "Sử dụng từ khóa 'static', để tối ưu hóa bộ nhớ RAM tại biên dịch." },
      { key: "C", text: "Sử dụng từ khóa 'inline', để nhúng mã trực tiếp vào chỗ gọi." },
      { key: "D", text: "Sử dụng từ khóa 'abstract' để tạo giao diện." }
    ],
    correctAnswer: "A",
    explanation: "Hàm ảo (được đánh dấu bằng từ khóa `virtual` trong lớp cha) cho phép trình biên dịch thực hiện cơ chế liên kết muộn (late binding / dynamic binding). Nhờ đó, phương thức của lớp con phù hợp nhất sẽ được gọi tại runtime tùy thuộc vào đối tượng thực tế mà con trỏ/tham chiếu lớp cha đang trỏ tới.",
    difficulty: "Dễ"
  },
  {
    id: "q10",
    category: Category.POLYMORPHISM,
    questionText: "Định nghĩa một hàm ảo thuần ảo (pure virtual function) trong C++ sử dụng cú pháp nào sau đây?",
    codeSnippet: `class MyAbstractClass {
public:
    // Cú pháp khai báo thuần ảo?
};`,
    options: [
      { key: "A", text: "virtual void display() = null;" },
      { key: "B", text: "virtual void display() = 0;" },
      { key: "C", text: "void display() = pure;" },
      { key: "D", text: "abstract void display();" }
    ],
    correctAnswer: "B",
    explanation: "Trong C++, một hàm thuần ảo được định nghĩa bằng cách thêm từ khóa `virtual` phía trước, tên hàm, danh sách đối số, và kết hợp bằng gán biểu thức `= 0;` ở cuối. Bất kỳ lớp nào có chứa ít nhất một hàm ảo thuần ảo đều trở thành Lớp trừu tượng (Abstract Class) và không thể khởi tạo đối tượng trực tiếp từ nó.",
    difficulty: "Dễ"
  },
  {
    id: "q11",
    category: Category.POLYMORPHISM,
    questionText: "Đoạn mã dưới đây in ra KQ nào? Chú ý con trỏ lớp cha trỏ tới đối tượng lớp con, hàm show() có từ khóa virtual nhưng hàm print() thì không.",
    codeSnippet: `#include <iostream>
using namespace std;

class Base {
public:
    virtual void show() { cout << "BaseShow "; }
    void print() { cout << "BasePrint "; }
};

class Derived : public Base {
public:
    void show() override { cout << "DerivedShow "; }
    void print() { cout << "DerivedPrint "; }
};

int main() {
    Base* b = new Derived();
    b->show();
    b->print();
    delete b;
    return 0;
}`,
    options: [
      { key: "A", text: "BaseShow BasePrint" },
      { key: "B", text: "DerivedShow BasePrint" },
      { key: "C", text: "DerivedShow DerivedPrint" },
      { key: "D", text: "BaseShow DerivedPrint" }
    ],
    correctAnswer: "B",
    explanation: "Con trỏ `b` có kiểu là `Base*` nhưng đang thực tế lưu địa chỉ đối tượng `Derived`. Bởi vì `show()` là một hàm ảo (virtual), C++ kích hoạt đa hình động và trỏ tới phiên bản trong lớp Derived (in ra DerivedShow). Còn `print()` KHÔNG phải là hàm ảo nên sẽ thực hiện liên kết sớm (early binding) dựa trên kiểu khai báo của con trỏ là `Base`, do đó gọi hàm `print()` của lớp Base (in ra BasePrint).",
    difficulty: "Khó"
  },
  {
    id: "q12",
    category: Category.POLYMORPHISM,
    questionText: "Tại sao chúng ta nên sử dụng hàm hủy ảo (virtual destructor) trong lớp cha?",
    codeSnippet: `class Base {
public:
    virtual ~Base() { // Hàm hủy ảo
        cout << "Destruct Base";
    }
};`,
    options: [
      { key: "A", text: "Để cho phép khởi tạo đối tượng một cách động dễ dàng hơn." },
      { key: "B", text: "Để đảm bảo khi ta xóa (delete) con trỏ lớp cha trỏ tới đối tượng lớp con, cả hàm hủy của lớp con và lớp cha đều được kích hoạt tuần tự, tránh rò rỉ bộ nhớ (memory leak)." },
      { key: "C", text: "Để bắt buộc lớp con phải viết hàm hủy riêng của nó." },
      { key: "D", text: "Để tiết kiệm dung lượng RAM khi chạy chương trình." }
    ],
    correctAnswer: "B",
    explanation: "If the base class destructor is not virtual, when we delete a base pointer pointing to a derived object, only the base class destructor executes. The derived class's destructor is skipped completely, risking memory leaks.",
    difficulty: "Khó"
  },
  {
    id: "q13",
    category: Category.OPERATORS,
    questionText: "Trong nạp chồng toán tử, từ khóa nào sau đây bắt buộc phải có để định nghĩa hàm nạp chồng?",
    codeSnippet: `Fraction operator+(const Fraction& other); // Từ khóa gì?`,
    options: [
      { key: "A", text: "overload" },
      { key: "B", text: "friend" },
      { key: "C", text: "operator" },
      { key: "D", text: "this" }
    ],
    correctAnswer: "C",
    explanation: "Để nạp chồng toán tử (operator overloading) trong C++, ta bắt buộc phải sử dụng từ khóa `operator` kết hợp với biểu tượng toán tử mong muốn (ví dụ: `operator+`, `operator-`, `operator<<`).",
    difficulty: "Dễ"
  },
  {
    id: "q14",
    category: Category.OPERATORS,
    questionText: "Khi viết hàm nạp chồng toán tử xuất dữ liệu (<<) để in đối tượng ra màn hình, hàm này thường được khai báo như thế nào?",
    codeSnippet: `// Cách khai báo chuẩn?
friend ostream& operator<<(ostream& os, const Fraction& f);`,
    options: [
      { key: "A", text: "Là phương thức ảo phi tĩnh của chính lớp đó." },
      { key: "B", text: "Là một hàm độc lập (thường là 'friend' của lớp đó) nhận luồng ostream& làm đối tham số đầu tiên." },
      { key: "C", text: "Là phương thức của lớp ostream mà không cần khai báo từ khóa lân cận." },
      { key: "D", text: "Là một hàm tĩnh nhận Fraction làm tham số duy nhất." }
    ],
    correctAnswer: "B",
    explanation: "Toán tử `<<` nhận đối tượng ostream làm operand bên trái (os << f). Do operand bên trái không phải là đối tượng lớp của ta mà là của hệ thống (`std::ostream`), ta không thể viết nó thành phương thức thành viên non-static thông thường. Giải pháp là định nghĩa nó là một hàm độc lập bên ngoài, và thường cho nó làm hàm bạn (`friend`) để truy cập được các thành viên private của lớp.",
    difficulty: "Trung bình"
  },
  {
    id: "q15",
    category: Category.ADVANCED,
    questionText: "Hàm bạn (friend function) của một lớp có quyền hạn gì đặc biệt đối với lớp đó?",
    codeSnippet: `class MyClass {
    int privateVar;
    friend void externalFriend(MyClass obj); // Hàm bạn
};`,
    options: [
      { key: "A", text: "Nó là một phương thức thành viên có con trỏ 'this'." },
      { key: "B", text: "Nó được phép truy cập tất cả thành viên private và protected của lớp đó dù không phải là thành viên lớp." },
      { key: "C", text: "Nó thừa hưởng toàn bộ phương thức của lớp thông qua kế thừa." },
      { key: "D", text: "Nó chỉ được phép gọi các phương thức công cộng public của lớp." }
    ],
    correctAnswer: "B",
    explanation: "Hàm bạn (`friend`) là hàm nằm hoàn toàn bên ngoài lớp nhưng được lớp đó 'trao quyền' thông qua khai báo từ khóa `friend` ở trong lớp. Hàm bạn có thể truy cập tự do toàn bộ các thuộc tính, phương thức dù ở trạng thái private hay protected của lớp đó.",
    difficulty: "Dễ"
  },
  {
    id: "q16",
    category: Category.OPERATORS,
    questionText: "Biểu thức con trỏ 'this' trong C++ thực chất đại diện cho điều gì?",
    codeSnippet: `class Point {
    int x, y;
public:
    void set(int x, int y) {
        this->x = x; //this là gì?
    }
};`,
    options: [
      { key: "A", text: "Địa chỉ của lớp hiện tại trong bộ nhớ ảo tĩnh." },
      { key: "B", text: "Một con trỏ hằng trỏ trực tiếp đến đối tượng hiện tại đang thực thi phương thức." },
      { key: "C", text: "Giá trị bản sao của đối tượng đang chạy." },
      { key: "D", text: "Một tham chiếu tĩnh đến lớp Parent gần nhất." }
    ],
    correctAnswer: "B",
    explanation: "Con trỏ `this` là một tham số ẩn tự động được truyền vào toàn bộ các phương thức phi tĩnh (non-static member functions). Nó chứa địa chỉ vật lý của đối tượng đang gọi phương thức đó. Kiểu của nó trong lớp Class là `Class* const` (con trỏ hằng, không thể gán thay đổi địa chỉ của `this` sang đối tượng khác).",
    difficulty: "Trung bình"
  },
  {
    id: "q17",
    category: Category.ADVANCED,
    questionText: "Khuôn mẫu hàm (Function Template) trong C++ chủ yếu giải quyết vấn đề nào sau đây?",
    codeSnippet: `template <typename T>
T getMin(T a, T b) {
    return (a < b) ? a : b;
}`,
    options: [
      { key: "A", text: "Hỗ trợ viết mã lập trình chạy nhanh hơn gấp hai lần." },
      { key: "B", text: "Cho phép viết một định nghĩa hàm tổng quát hoạt động với nhiều kiểu dữ liệu khác nhau mà không cần viết lại mã nguồn trùng lặp cho từng kiểu." },
      { key: "C", text: "Định nghĩa một lớp cha ảo độc lập với mọi thư viện chuẩn." },
      { key: "D", text: "Cho phép nạp chồng toán tử tại thời điểm gỡ lỗi." }
    ],
    correctAnswer: "B",
    explanation: "Templates hay Khuôn mẫu là một tính năng cực kỳ mạnh mẽ hỗ trợ Lập trình tổng quát (Generic Programming). Nó cho phép lập trình viên định nghĩa một cấu trúc hàm hoặc lớp đa năng mà kiểu dữ liệu cụ thể đóng vai trò tham số hóa (parameterized). Trình biên dịch sẽ tự động sinh mã thích hợp khi phát hiện kiểu truyền vào tương ứng.",
    difficulty: "Trung bình"
  },
  {
    id: "q18",
    category: Category.INHERITANCE,
    questionText: "Sự cố hay lỗi 'Kim cương' (Diamond Problem) trong C++ xảy ra khi nào?",
    codeSnippet: `class A {};
class B : public A {};
class C : public A {};
class D : public B, public C {}; // D thừa hưởng gì từ A?`,
    options: [
      { key: "A", text: "Khi một lớp con kế thừa từ nhiều lớp cha độc lập không có quan hệ họ hàng." },
      { key: "B", text: "Khi hai lớp riêng lẻ khai báo hàm ảo của nhau và gọi chéo." },
      { key: "C", text: "Khi một lớp con kế thừa từ hai lớp cha khác nhau mà cả hai lớp cha này đều cùng kế thừa từ một lớp gốc chung, gây ra tính đa nghĩa khi truy cập tài nguyên lớp gốc." },
      { key: "D", text: "Khi vòng lặp khởi tạo Constructor bị vô hạn." }
    ],
    correctAnswer: "C",
    explanation: "Sự cố Diamond xảy ra khi lớp con D kế thừa từ cả B và C, nhưng B và C lại cùng kế thừa từ A. Lúc đó, đối tượng D sẽ chứa hai bản sao thuộc tính của A (một qua B, một qua C). Điều này dẫn tới xung đột đa nghĩa khi truy xuất thành viên từ A. C++ giải quyết vấn đề này bằng cách sử dụng kế thừa ảo: `class B : virtual public A`.",
    difficulty: "Khó"
  },
  {
    id: "q19",
    category: Category.INHERITANCE,
    questionText: "Để giải quyết sự cố nhập nhằng 'Kim cương' nêu trên, ta phải dùng từ khóa nào khi cho B và C kế thừa từ A?",
    codeSnippet: `class B : [Từ khóa?] public A {};`,
    options: [
      { key: "A", text: "abstract" },
      { key: "B", text: "virtual" },
      { key: "C", text: "static" },
      { key: "D", text: "friend" }
    ],
    correctAnswer: "B",
    explanation: "Sử dụng kế thừa ảo `virtual` (ví dụ: `class B : virtual public A {}`) thông báo cho trình biên dịch chỉ tạo đúng một bản sao duy nhất của lớp cơ sở A bên trong các lớp dẫn xuất sâu hơn. Điều này giúp loại bỏ sự nhập nhằng hoàn toàn.",
    difficulty: "Trung bình"
  },
  {
    id: "q20",
    category: Category.BASICS,
    questionText: "Đặc điểm cốt lõi nào thể hiện 'Tính đóng gói' (Encapsulation) trong lập trình hướng đối tượng?",
    codeSnippet: `class BankAccount {
private:
    double balance;
public:
    void deposit(double amount) { balance += amount; }
};`,
    options: [
      { key: "A", text: "Cho phép các lớp trao đổi thông tin cục bộ với nhau thông qua mạng LAN." },
      { key: "B", text: "Che giấu chi tiết triển khai bên trong đối tượng và chỉ công khai những giao thức/phương thức cần thiết thông qua từ khóa access specifiers (private, public, protected)." },
      { key: "C", text: "Khả năng tái định nghĩa hành vi hàm của đối tượng tại thời điểm thực thi." },
      { key: "D", text: "Cho phép gán đối tượng này sang đối tượng kia trực tiếp." }
    ],
    correctAnswer: "B",
    explanation: "Tính đóng gói là hành động nhóm dữ liệu (thuộc tính) và các hoạt động trên dữ liệu đó (phương thức) lại thành một đơn vị duy nhất (lớp), đồng thời che giấu thông tin chi tiết nội bộ khỏi thế giới bên ngoài (thường dùng private) để tránh sự can thiệp trực tiếp làm sai lệch trạng thái dữ liệu.",
    difficulty: "Dễ"
  },
  {
    id: "q21",
    category: Category.ADVANCED,
    questionText: "Khi một ngoại lệ (exception) xảy ra trong khối lệnh try, từ khóa nào sau đây được dùng để ném ngoại lệ đó đi cho bên catch nhận?",
    codeSnippet: `int divide(int a, int b) {
    if (b == 0) [Từ khóa?] "Division by zero!";
    return a / b;
}`,
    options: [
      { key: "A", text: "raise" },
      { key: "B", text: "throw" },
      { key: "C", text: "except" },
      { key: "D", text: "catch" }
    ],
    correctAnswer: "B",
    explanation: "Trong C++, từ khóa `throw` được dùng để chủ động phát sinh và ném đi một ngoại lệ (exception) khi phát hiện điều kiện biên bất thường xảy ra. Khối điều khiển sau đó sẽ nhảy lập tức đến khối `catch` phù hợp nhất để xử lý.",
    difficulty: "Dễ"
  },
  {
    id: "q22",
    category: Category.OPERATORS,
    questionText: "Toán tử nạp chồng nào không thể được kế thừa bởi các lớp con trong C++?",
    codeSnippet: `// Ví dụ các toán tử đặc biệt`,
    options: [
      { key: "A", text: "Toán tử gán (operator=)" },
      { key: "B", text: "Toán tử cộng (operator+)" },
      { key: "C", text: "Toán tử so sánh bằng (operator==)" },
      { key: "D", text: "Mọi toán tử nạp chồng đều được kế thừa." }
    ],
    correctAnswer: "A",
    explanation: "Trong C++, đa số toán tử nạp chồng đều được kế thừa sang lớp con, TRỪ toán tử gán `operator=` (và các hàm thiết lập, hàm hủy). Lý do là vì toán tử gán của lớp con cần phải chịu trách nhiệm gán thêm các thuộc tính mới phát sinh riêng của lớp con, nên trình biên dịch sẽ tự sinh toán tử gán riêng cho lớp con nếu lập trình viên không định nghĩa nó.",
    difficulty: "Khó"
  },
  {
    id: "q23",
    category: Category.CONSTRUCTORS,
    questionText: "Mục đích của việc sử dụng danh sách khởi tạo (Initializer List) trong Constructor là gì?",
    codeSnippet: `class MyClass {
    const int val;
public:
    MyClass(int v) : val(v) {} // Initializer List
};`,
    options: [
      { key: "A", text: "Khai báo các biến tĩnh có giá trị hằng số." },
      { key: "B", text: "Khởi tạo giá trị trực tiếp cho các thành viên dữ liệu trước khi phần thân Constructor chạy, đặc biệt bắt buộc đối với biến hằng (const) và biến tham chiếu." },
      { key: "C", text: "Phương pháp duy nhất để chỉ định quyền truy cập private." },
      { key: "D", text: "Để giải phóng tài nguyên của lớp cha tự động." }
    ],
    correctAnswer: "B",
    explanation: "Danh sách khởi tạo (Constructor initializer list) thực hiện khởi tạo thành viên một cách trực tiếp khi bộ nhớ cho đối tượng vừa được cấp phát, trước khi mã lệnh trong cặp `{}` của constructor chạy. Điều này là bắt buộc đối với các biến có từ khóa `const`, biến thuộc kiểu tham chiếu (`int&`), hoặc các thuộc tính đối tượng lớp cha không có default constructor.",
    difficulty: "Trung bình"
  },
  {
    id: "q24",
    category: Category.INHERITANCE,
    questionText: "Đoạn mã sau xảy ra lỗi gì khi biên dịch?",
    codeSnippet: `class Parent {
private:
    int money = 1000;
};
class Child : public Parent {
public:
    void spend() {
        money -= 100; // Truy cập thuộc tính lớp cha
    }
};`,
    options: [
      { key: "A", text: "Lỗi runtime chia cho 0." },
      { key: "B", text: "Lỗi biên dịch, hoạt động gán trừ không hợp lệ trên số thực." },
      { key: "C", text: "Lỗi biên dịch vì thuộc tính money là private trong lớp cha, lớp con không được quyền truy cập trực tiếp." },
      { key: "D", text: "Chương trình chạy bình thường vì có kế thừa public." }
    ],
    correctAnswer: "C",
    explanation: "Các thành viên dữ liệu được khai báo là `private` ở lớp cha sẽ hoàn toàn bị ẩn đối với tất cả các lớp bên ngoài, bao gồm cả các lớp con kế thừa trực tiếp từ nó. Lớp con chỉ có thể truy xuất gián tiếp thông qua các phương thức getter/setter hiển thị public của cha. Nếu muốn lớp con có quyền truy xuất trực tiếp nhưng bên ngoài vẫn đóng kín, ta phải đổi nó thành quyền `protected` ở lớp cha.",
    difficulty: "Dễ"
  },
  {
    id: "q25",
    category: Category.POLYMORPHISM,
    questionText: "Khái niệm Thác Đối Tượng (Object Slicing) trong C++ xảy ra khi nào?",
    codeSnippet: `class Base { int b; };
class Derived : public Base { int d; };
// Gán đối tượng Derived cho Base:
Base target;
Derived source;
target = source; // Xảy ra hiện tượng gì?`,
    options: [
      { key: "A", text: "Xảy ra lỗi rò rỉ phân mảnh RAM ở runtime." },
      { key: "B", text: "Phần dữ liệu đặc trưng của đối tượng Derived (biến d) bị cắt bỏ đi khi gán cho đối tượng Base, chỉ còn giữ lại phần thuộc tính thuộc về Base." },
      { key: "C", text: "Trình biên dịch báo lỗi nặng do khác kiểu dữ liệu." },
      { key: "D", text: "Cả hai đối tượng tự động hòa trộn thuộc tính với nhau." }
    ],
    correctAnswer: "B",
    explanation: "Thác Đối Tượng (Object Slicing) xảy ra khi một đối tượng lớp con được gán theo giá trị (by value) cho một đối tượng lớp cha. Vì đối tượng lớp cha có kích thước nhỏ hơn và không chứa các biến thành viên đặc trưng của con, phần dữ liệu dôi dư của con sẽ bị 'gọt cắt sạch'. Để tránh hiện tượng này, ta phải sử dụng con trỏ (pointers) hoặc tham chiếu (references) để quản lý đa hình.",
    difficulty: "Khó"
  }
];
