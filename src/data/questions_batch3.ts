/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Question } from "../types";

export const BATCH3_QUESTIONS: Question[] = [
  {
    id: "q51",
    category: Category.POLYMORPHISM,
    questionText: "Nhận định nào sau đây là hoàn toàn đúng về Hàm khởi tạo ảo (Virtual Constructor) trong C++?",
    codeSnippet: `class Demo {
public:
    virtual Demo() {} // Có hợp lệ không?
};`,
    options: [
      { key: "A", text: "Hàm khởi tạo ảo rất quan trọng để đồng bộ hóa kích thước đối tượng." },
      { key: "B", text: "C++ KHÔNG hỗ trợ hàm khởi tạo ảo. Trình biên dịch sẽ báo lỗi biên dịch nặng nếu gắn 'virtual' trước constructor." },
      { key: "C", text: "Chỉ được khai báo khi sử dụng đa kế thừa phi đối xứng." },
      { key: "D", text: "Chỉ có thể dùng nếu trong lớp không có biến hằng." }
    ],
    correctAnswer: "B",
    explanation: "Trong C++, một đối tượng cần được xác định rõ ràng kiểu cụ thể tại thời điểm biên dịch để cấp phát đủ dung lượng RAM. Cơ chế hàm ảo hoạt động nhờ bảng ảo (vtable) trỏ bởi con trỏ vptr, mà con trỏ vptr này chỉ được thiết lập sau khi Constructor chạy xong. Do đó, không thể nào có khái niệm hàm khởi tạo ảo.",
    difficulty: "Trung bình"
  },
  {
    id: "q52",
    category: Category.POLYMORPHISM,
    questionText: "Bản chất cơ chế kỹ thuật giúp C++ thực thi Đa hình động (Dynamic Polymorphism) là gì?",
    codeSnippet: `// Cơ chế lưu trữ định hướng runtime`,
    options: [
      { key: "A", text: "Nhờ giải thuật tìm kiếm chuỗi tự động của trình thông dịch." },
      { key: "B", text: "Nhờ việc tạo ra một bảng phương thức ảo (vtable - Virtual Table) cho mỗi lớp có hàm ảo, và mỗi đối tượng chứa một con trỏ định hướng bảng ảo (vptr)." },
      { key: "C", text: "Nhờ trình biên dịch chèn lại toàn bộ mã nguồn của lớp con vào lớp cha." },
      { key: "D", text: "Nhờ tắt tối ưu hóa của card màn hình." }
    ],
    correctAnswer: "B",
    explanation: "Khi một lớp chứa ít nhất một phương thức ảo, trình biên dịch tạo ra một bảng Virtual Table (vtable) lưu địa chỉ các hàm ảo tương ứng. Mỗi đối tượng của lớp đó sẽ sở hữu một con trỏ ngầm định tên là `vptr` trỏ tới vtable. Khi gọi hàm thông qua con trỏ cha, hệ thống truy xuất qua `vptr` để giải phóng đúng địa chỉ hàm con tại runtime.",
    difficulty: "Khó"
  },
  {
    id: "q53",
    category: Category.POLYMORPHISM,
    questionText: "Từ khóa 'final' (áp dụng từ C++11) đặt sau tên của một phương thức ảo có tác dụng gì?",
    codeSnippet: `class Base {
public:
    virtual void show() final;
};`,
    options: [
      { key: "A", text: "Yêu cầu lớp con bắt buộc phải định nghĩa lại hàm này." },
      { key: "B", text: "Ngăn chặn tuyệt đối các lớp con kế thừa không được phép ghi đè (override) phương thức này nữa." },
      { key: "C", text: "Giải phóng tự động vùng nhớ của hàm." },
      { key: "D", text: "Biến hàm này thành hàm thuần ảo." }
    ],
    correctAnswer: "B",
    explanation: "Từ khóa `final` trong C++11 được dùng để chặn đứng dây chuyền đa hình. Nó tuyên bố rằng các lớp con cháu dẫn xuất sau này từ lớp đó sẽ không được phép ghi đè (override) phương thức này nữa, nếu cố tình ghi đè trình biên dịch sẽ tạo lỗi lập tức.",
    difficulty: "Trung bình"
  },
  {
    id: "q54",
    category: Category.POLYMORPHISM,
    questionText: "Từ khóa 'final' đặt sau tên của một Lớp (Class) trong C++11 có ý nghĩa gì?",
    codeSnippet: `class Secure final {};
// class Sub : public Secure {}; // Có lỗi không?`,
    options: [
      { key: "A", text: "Lớp này không cho phép tạo đối tượng." },
      { key: "B", text: "Lớp này không cho phép chứa phương thức tĩnh." },
      { key: "C", text: "Ngăn chặn tuyệt đối việc kế thừa từ lớp này. Không một lớp nào có thể lấy lớp này làm cha." },
      { key: "D", text: "Biến lớp này thành một khuôn mẫu template định sẵn." }
    ],
    correctAnswer: "C",
    explanation: "Khi áp dụng `final` sau tên Class, bạn thông báo cho trình biên dịch rằng lớp này đã hoàn hảo và khép kín. Mọi nỗ lực viết lớp con kế thừa từ nó (`class Sub : public Secure {};`) đều bị ngăn chặn để tránh phá vỡ kiến trúc bảo mật.",
    difficulty: "Trung bình"
  },
  {
    id: "q55",
    category: Category.POLYMORPHISM,
    questionText: "Nếu một lớp con kế thừa từ lớp trừu tượng (Abstract Class) mà không định nghĩa lại (override) đầy đủ TẤT CẢ các hàm thuần ảo của cha, thì lớp con đó trở thành loại lớp nào?",
    codeSnippet: `class Abstract { virtual void run() = 0; };
class Child : public Abstract { 
    // không override run()
};`,
    options: [
      { key: "A", text: "Trở thành một lớp cụ thể bình thường." },
      { key: "B", text: "Bản thân lớp con cũng tiếp tục là một lớp trừu tượng và không thể tạo đối tượng từ nó." },
      { key: "C", text: "Bị lỗi cú pháp không cho biên dịch." },
      { key: "D", text: "Hệ thống tự điền mã rỗng cho các hàm thiếu." }
    ],
    correctAnswer: "B",
    explanation: "Một lớp con chỉ thoát kiếp 'trừu tượng' khi và chỉ khi nó định nghĩa cụ thể đầy đủ phần thân cho TẤT CẢ hàm thuần ảo thừa hưởng từ lớp cha mẹ. Nếu để sót lại dù chỉ một hàm thuần ảo duy nhất, lớp con đó vẫn tiếp tục mang đặc tính trừu tượng và không thể khởi dựng đối tượng tự do.",
    difficulty: "Trung bình"
  },
  {
    id: "q56",
    category: Category.POLYMORPHISM,
    questionText: "Đoạn mã sau xảy ra điều gì cực kỳ thú vị và phản trực giác đối với bẫy tham số mặc định trong Hàm ảo C++?",
    codeSnippet: `#include <iostream>
using namespace std;

class Base {
public:
    virtual void print(int x = 10) { cout << "Base:" << x; }
};
class Derived : public Base {
public:
    void print(int x = 20) override { cout << "Derived:" << x; }
};

int main() {
    Base* b = new Derived();
    b->print(); // In ra kết quả gì?
    delete b;
    return 0;
}`,
    options: [
      { key: "A", text: "In ra Derived:20" },
      { key: "B", text: "In ra Base:10" },
      { key: "C", text: "In ra Derived:10" },
      { key: "D", text: "In ra Base:20" }
    ],
    correctAnswer: "C",
    explanation: "Đây là một bẫy kinh điển thuộc hạng nâng cao trong C++! Tham số mặc định (default parameters) được xử lý bằng cơ chế LIÊN KẾT SỚM (biên dịch xác định dựa trên kiểu của con trỏ là Base* -> lấy giá trị x = 10). Nhưng thân hàm ảo lại liên kết muộn tại runtime để chạy phiên bản ghi đè của con (Derived). Kết quả là hàm print() của lớp Derived sẽ chạy nhưng nhận tham số mặc định của lớp Base! Do vậy kết quả in ra là 'Derived:10'. Nguyên tắc vàng: TRÁNH thay đổi tham số mặc định khi override hàm ảo.",
    difficulty: "Khó"
  },
  {
    id: "q57",
    category: Category.POLYMORPHISM,
    questionText: "Chuyện gì xảy ra nếu ta gọi một hàm ảo từ ngay bên trong thân Hàm khởi tạo (Constructor) hoặc Hàm hủy (Destructor) của chính lớp cha?",
    codeSnippet: `class Base {
public:
    Base() { callVirtual(); }
    virtual void callVirtual() { cout << "BaseVirtual"; }
};
class Derived : public Base {
public:
    void callVirtual() override { cout << "DerivedVirtual"; }
};
// Derived d; // Constructor Base chạy sẽ gọi hàm nào?`,
    options: [
      { key: "A", text: "Nó sẽ gọi phiên bản DerivedVirtual lớp con bình thường." },
      { key: "B", text: "Nó sẽ gọi phiên bản BaseVirtual lớp cha chứ không kích hoạt đa hình xuống con." },
      { key: "C", text: "Gây lỗi sập chương trình ngay tại thời điểm biên dịch." },
      { key: "D", text: "Không có hàm nào chạy." }
    ],
    correctAnswer: "B",
    explanation: "Khi Constructor lớp cha đang khởi chạy, phần bộ nhớ đặc thù của lớp con kế thừa vẫn CHƯA ĐƯỢC xây dựng. Do đó, C++ bảo vệ chương trình bằng cách ngắt tính đa hình tạm thời: bất kỳ cuộc gọi hàm ảo nào trong constructor/destructor đều chỉ gọi phiên bản của lớp KIỂU HIỆN TẠI đang chạy chứ không bao giờ nhảy xuống lớp con dẫn dẫn xuôi. Do đó sẽ in ra 'BaseVirtual'.",
    difficulty: "Khó"
  },
  {
    id: "q58",
    category: Category.POLYMORPHISM,
    questionText: "Khái niệm Kiểu trả về đồng biến (Covariant Return Types) trong nạp chồng ghi đè hàm ảo C++ cho phép điều gì xảy ra?",
    codeSnippet: `class FactoryBase { virtual Base* create(); };
class FactoryDerived : public FactoryBase {
    Derived* create() override; // Có lỗi không?
};`,
    options: [
      { key: "A", text: "Lỗi biên dịch vì ghi đè bắt buộc kiểu trả về phải y hệt cha." },
      { key: "B", text: "Cho phép hàm ghi đè ở lớp con được trả về một con trỏ/tham chiếu đến lớp con, thay vì con trỏ/tham chiếu lớp cha." },
      { key: "C", text: "Chỉ cho phép trả về số nguyên tĩnh kiểu nguyên thủy." },
      { key: "D", text: "Cắt giảm bộ nhớ hàm ảo đi một nửa." }
    ],
    correctAnswer: "B",
    explanation: "Thông thường ghi đè đòi hỏi kiểu trả về phải giống hệt. Nhưng C++ hỗ trợ ngoại lệ đặc thù là đồng biến (Covariant): Nếu một hàm ảo của cha trả về con trỏ/tham chiếu `Base*` hoặc `Base&`, hàm ảo ghi đè ở lớp con được phép trả về con trỏ/tham chiếu lớp con tương ứng `Derived*` hoặc `Derived&` giúp code gọi trực quan hơn.",
    difficulty: "Khó"
  },
  {
    id: "q59",
    category: Category.POLYMORPHISM,
    questionText: "Một phương thức ảo (virtual function) có thể được khai báo là tĩnh (static) hay không?",
    codeSnippet: `class Demo {
public:
    virtual static void test() {} // Hợp lệ không?
};`,
    options: [
      { key: "A", text: "Có, static virtual là cú pháp chuẩn mực cho lập trình đa nhiệm." },
      { key: "B", text: "Không, phương thức tĩnh không thuộc về đối tượng cụ thể (không có con trỏ 'this' ẩn) nên không thể thực hiện tìm kiếm qua bảng ảo vtable được." },
      { key: "C", text: "Chỉ cho phép nếu lớp đó là lớp con." },
      { key: "D", text: "Có, nhưng nó không thể nhận tham số đầu vào." }
    ],
    correctAnswer: "B",
    explanation: "Đa hình động tại runtime hoạt động bằng cách dựa vào con trỏ vptr nằm thực tế trong từng đối tượng cụ thể của lớp. Phương thức tĩnh (`static`) là các hàm thuộc lớp độc lập, không cần đối tượng tồn tại để gọi, dẫn tới không có cơ chế nào để tìm kiếm bảng ảo vtable. Do đó, static virtual là một sự phi lý và bị trình biên dịch cấm tiệt.",
    difficulty: "Dễ"
  },
  {
    id: "q60",
    category: Category.POLYMORPHISM,
    questionText: "Lớp trừu tượng (Abstract Class) khác gì so với giao diện Interface truyền thống thường gặp?",
    codeSnippet: `// So sánh khái niệm trừu tượng`,
    options: [
      { key: "A", text: "Lớp trừu tượng bắt buộc không được chứa thuộc tính dữ liệu." },
      { key: "B", text: "Lớp trừu tượng trong C++ có thể chứa cả các phương thức đã cài đặt đầy đủ nội dung, trong khi Interface lý tưởng chỉ chứa khai báo phương thức thuần ảo." },
      { key: "C", text: "Interface có thể tự tạo đối tượng trực tiếp bình thường." },
      { key: "D", text: "Không có sự khác nhau về mặt cú pháp." }
    ],
    correctAnswer: "B",
    explanation: "Trong C++ không có từ khóa `interface` riêng như Java hay C#. Ta mô phỏng Interface bằng một lớp trừu tượng đặc biệt chứa hoàn toàn phương thức thuần ảo. Lớp trừu tượng nói chung vẫn có thể chứa biến thành viên bình thường, và có cả các hàm hoàn chỉnh đã cài đặt mã nguồn để con cháu tái chế trực tiếp.",
    difficulty: "Trung bình"
  },
  {
    id: "q61",
    category: Category.POLYMORPHISM,
    questionText: "Nếu bạn khai báo một phương thức ảo là private trong lớp cha, lớp con có thể tiến hành ghi đè (override) phương thức ảo đó được hay không?",
    codeSnippet: `class Parent {
private:
    virtual void process() { cout << "Parent"; }
};
class Child : public Parent {
    // Có ghi đè private virtual được không?
};`,
    options: [
      { key: "A", text: "Tuyệt đối không, private của cha thì lớp con không bao giờ thấy hay override được." },
      { key: "B", text: "Được phép ghi đè hoàn toàn bình thường. Lớp con chỉ không thể tự ý gọi hàm đó của cha chứ hoàn toàn có quyền thay thế hành xử qua bảng vtable ảo." },
      { key: "C", text: "Chỉ được khi lớp con dùng kế thừa bảo mật." },
      { key: "D", text: "Biên dịch sẽ cảnh báo nghiêm trọng lỗi tràn bộ nhớ." }
    ],
    correctAnswer: "B",
    explanation: "Đây là một bẫy lý thuyết rất thú vị của C++. Quyền truy cập (`private`/`public`) độc lập hoàn toàn với tính đa hình ảo. Lớp con dù không thể trực tiếp gọi phương thức private của cha, nhưng nó vẫn được trình biên dịch cho phép ghi đè (override) lại hàm ảo private đó để thay đổi cách thức vận dụng khi gọi đa hình từ cha. Điều này thường ứng dụng trong mẫu thiết kế Template Method Pattern.",
    difficulty: "Khó"
  },
  {
    id: "q62",
    category: Category.POLYMORPHISM,
    questionText: "Tại sao nói C++ là một ngôn ngữ hỗ trợ tính chất Đa hình tĩnh (Static Polymorphic) mạnh mẽ vượt trội?",
    codeSnippet: `// Khái niệm đa hình tĩnh`,
    options: [
      { key: "A", text: "Vì C++ có thể biên dịch mã trực tiếp sang hợp ngữ Assembly." },
      { key: "B", text: "Vì C++ hỗ trợ cơ chế Nạp chồng toán tử (Operator Overloading), Quá tải hàm (Function Overloading) và Khuôn mẫu Templates giúp giải quyết đa dạng hóa tại thời điểm biên dịch." },
      { key: "C", text: "Vì mọi hàm trong C++ đều có hành xử ảo mặc định." },
      { key: "D", text: "Vì C++ sử dụng rvalueref để tối ưu đa luồng." }
    ],
    correctAnswer: "B",
    explanation: "Mọi nỗ lực định nghĩa nhiều hình thái xử lý dựa trên một tên gọi chung được giải quyết từ lúc biên dịch (`compile-time`) gọi là đa hình tĩnh. Function overloading, Operator overloading và C++ Templates hoạt động cực nhanh vì không hề mất chi phí tra cứu bảng ảo vtable tại runtime.",
    difficulty: "Trung bình"
  },
  {
    id: "q63",
    category: Category.POLYMORPHISM,
    questionText: "Khi con trỏ lớp con trỏ tới lớp con thì không cần hàm hủy ảo. Nhưng giả định ta có sơ đồ sau, không có ảo ở destructors. Việc delete sẽ giải phóng thiếu phần nào?",
    codeSnippet: `class Base { int* arr1 = new int[10]; };
class Derived : public Base { int* arr2 = new int[20]; };
Base* ptr = new Derived();
delete ptr;`,
    options: [
      { key: "A", text: "Sẽ rò rỉ mảng arr1 của lớp Base." },
      { key: "B", text: "Sẽ giải phóng hoàn hảo cả hai do C++ phát hiện địa chỉ." },
      { key: "C", text: "Sẽ rò rỉ mảng arr2 của lớp Derived (hàm hủy Derived không chạy)." },
      { key: "D", text: "Báo lỗi crash sập RAM ngay lập tức không cho chạy tiếp." }
    ],
    correctAnswer: "C",
    explanation: "Do destructor lớp cha không có từ khóa `virtual`, lệnh `delete ptr` phân tích tĩnh thấy kiểu trỏ là `Base*` nên chỉ gọi hàm hủy lớp Base. Kết quả là hàm hủy lớp con Derived bị lờ đi hoàn toàn, tài nguyên `arr2` không có ai dọn dẹp và rò rỉ vùng nhớ thầm lặng suốt hành trình ứng dụng chạy.",
    difficulty: "Khó"
  },
  {
    id: "q64",
    category: Category.POLYMORPHISM,
    questionText: "Nếu một phương thức ảo trong lớp Base được khai báo có từ khóa 'const', phương thức ghi đè ở Derived có bắt buộc phải const hay không?",
    codeSnippet: `class Base { virtual void test() const; };
class Derived : public Base {
    void test() [Từ khóa?];
};`,
    options: [
      { key: "A", text: "Trực tiếp bỏ từ khóa const đi để tăng tốc chạy." },
      { key: "B", text: "Bắt buộc phải có 'const' ở cuối, nếu không trình biên dịch coi là hàm hoàn toàn mới chứ không phải ghi đè." },
      { key: "C", text: "Chỉ bắt buộc có ở lớp cháu nội." },
      { key: "D", text: "Sử dụng từ khóa mutable thay thế hoàn toàn được." }
    ],
    correctAnswer: "B",
    explanation: "Hạ ký tự hằng (`const`) ở đuôi phương thức làm thay đổi trực tiếp chữ ký hàm (function signature/prototype). Nếu lớp con không viết kèm đuôi `const`, trình biên dịch C++ hiểu rằng bạn đang định nghĩa một hàm mới tinh có tên tương đồng chứ không phải ghi đè hàm ảo của cha.",
    difficulty: "Trung bình"
  },
  {
    id: "q65",
    category: Category.BASICS,
    questionText: "Liên kết sớm (Early binding / Static binding) xảy ra tại thời điểm nào trong vòng đời chương trình?",
    codeSnippet: `// Khái niệm liên kết`,
    options: [
      { key: "A", text: "Tại thời điểm chương trình đang hoạt động (Runtime)." },
      { key: "B", text: "Tại thời điểm chương trình đang được biên dịch (Compile-time)." },
      { key: "C", text: "Tại thời điểm người dùng cài đặt ứng dụng vào ổ đĩa." },
      { key: "D", text: "Tại thời điểm dọn dẹp bộ nhớ rác." }
    ],
    correctAnswer: "B",
    explanation: "Liên kết sớm có nghĩa là trình biên dịch xác định và gắn trực tiếp địa chỉ vật lý của mã lệnh hàm cần gọi ngay trong quá trình dịch code (Compile-time). Liên kết sớm diễn ra rất nhanh và hiệu quả, áp dụng cho toàn bộ các hàm thông thường, hàm tĩnh, hàm bạn.",
    difficulty: "Dễ"
  },
  {
    id: "q66",
    category: Category.POLYMORPHISM,
    questionText: "Ngược lại, Liên kết muộn (Late binding / Dynamic binding) xảy ra lúc nào và áp dụng cho cơ chế nào?",
    codeSnippet: `// Khái niệm liên kết muộn`,
    options: [
      { key: "A", text: "Tại thời điểm biên dịch, dành cho hàm nạp chồng toán tử." },
      { key: "B", text: "Tại thời điểm chạy chương trình (Runtime), dành cho cơ chế gọi Hàm ảo đa hình." },
      { key: "C", text: "Chỉ khi bộ nhớ RAM bị tràn vượt ngưỡng." },
      { key: "D", text: "Lúc gỡ lỗi bằng phần mềm ngoại vi." }
    ],
    correctAnswer: "B",
    explanation: "Liên kết muộn trù hoãn việc quyết định gọi hàm cụ thể nào cho tới khi chương trình đang thực chạy (Runtime), dựa trên kiểu thực tế của đối tượng chứ không phụ thuộc vào vỏ kiểu con trỏ. Đây chính là xương sườn giúp giải quyết hoạt động linh hoạt của đa hình động.",
    difficulty: "Dễ"
  },
  {
    id: "q67",
    category: Category.POLYMORPHISM,
    questionText: "Mã nguồn dưới đây in ra thông tin nào? Chú ý cách hoạt động của virtual destructor.",
    codeSnippet: `#include <iostream>
using namespace std;

class Base {
public:
    virtual ~Base() { cout << "Base "; }
};
class Derived : public Base {
public:
    ~Derived() { cout << "Derived "; }
};

int main() {
    Base* b = new Derived();
    delete b;
    return 0;
}`,
    options: [
      { key: "A", text: "Base" },
      { key: "B", text: "Derived" },
      { key: "C", text: "Derived Base" },
      { key: "D", text: "Base Derived" }
    ],
    correctAnswer: "C",
    explanation: "Khi hủy đối tượng đa hình có sử dụng ảo `~Base()`, hệ thống biên dịch sẽ đi tìm hàm hủy thực tế của đối tượng con hiện tại để chạy trước (in ra Derived), sau đó nó sẽ tự động chạy ngược lên hàm hủy của lớp cha theo đúng bản chất dọn dẹp kim tự tháp (in ra Base). KQ nhận được: 'Derived Base '.",
    difficulty: "Trung bình"
  },
  {
    id: "q68",
    category: Category.POLYMORPHISM,
    questionText: "Trong C++11, từ khóa nào tăng tính an toàn hiển thị khi cố ý ghi đè một hàm ảo, tránh lỗi gõ chính tả nhầm chữ cái?",
    codeSnippet: `void show() [Từ khóa?] { cout << "Test"; }`,
    options: [
      { key: "A", text: "overload" },
      { key: "B", text: "override" },
      { key: "C", text: "virtual" },
      { key: "D", text: "implement" }
    ],
    correctAnswer: "B",
    explanation: "Từ khóa ngữ cảnh `override` ở C++11 giúp kiểm duyệt chất lượng mã nguồn biên dịch. Nếu bạn gõ sai dẫu chỉ một chữ cái tên phương thức so với cha, trình biên dịch sẽ rà soát chữ ký và báo lỗi lập tức: 'hàm này được đánh dấu override nhưng không thực sự ghi đè bất kỳ hàm ảo nào của cha'.",
    difficulty: "Dễ"
  },
  {
    id: "q69",
    category: Category.POLYMORPHISM,
    questionText: "Khẳng định nào dưới đây đúng về 'Lớp trừu tượng thuần khiết' (Pure Abstract Class / Interface)?",
    codeSnippet: `// Khái niệm kiến trúc`,
    options: [
      { key: "A", text: "Là lớp chỉ chứa duy nhất các phương thức hằng const." },
      { key: "B", text: "Là lớp không có biến thành viên và mọi phương thức đều là hàm thuần ảo = 0." },
      { key: "C", text: "Là lớp có tất cả hàm là tĩnh static." },
      { key: "D", text: "Là lớp không thể kế thừa được nữa." }
    ],
    correctAnswer: "B",
    explanation: "Một lớp trừu tượng thuần khiết (thường được coi là tương đương với Interface trong C++) có đặc thù không giữ trạng thái cục bộ (không chứa biến thành viên dữ liệu) và mọi phương thức trong nó đều là thuần ảo `= 0`. Lớp con bắt buộc phải thực thi lắp đặt từng bộ khung này.",
    difficulty: "Trung bình"
  },
  {
    id: "q70",
    category: Category.POLYMORPHISM,
    questionText: "Khi bạn khai báo một lớp chứa hàm ảo, kích thước của đối tượng (sizeof) tăng thêm đúng bằng lượng bộ nhớ lưu trữ cái gì?",
    codeSnippet: `class VirtualClass {
public:
    virtual void show() {}
};`,
    options: [
      { key: "A", text: "Tăng thêm bằng kích thước toàn bộ thân mã nguồn của hàm show()." },
      { key: "B", text: "Tăng thêm đúng bằng kích thước của 1 con trỏ bộ nhớ (để lưu con trỏ vptr tới bảng ảo - vtable)." },
      { key: "C", text: "Không tăng thêm bất cứ byte bộ nhớ nào." },
      { key: "D", text: "Tăng thêm 100 byte lưu trữ mặc định." }
    ],
    correctAnswer: "B",
    explanation: "Để phục vụ đa hình động, mỗi đối tượng sinh ra thuộc lớp chứa hàm ảo cần giữ liên kết ngầm định tới Virtual Table. Trình biên dịch chèn thêm âm thầm một con trỏ duy nhất `vptr` vào biến sơ bộ của đối tượng. Trên máy tính 64-bit, kích thước đối tượng sẽ tăng thêm đúng 8 byte để lưu trữ con trỏ này.",
    difficulty: "Khó"
  },
  {
    id: "q71",
    category: Category.POLYMORPHISM,
    questionText: "Phát biểu nào sau đây về hàm ảo thuần ảo trong C++ là ĐÚNG?",
    codeSnippet: `virtual void run() = 0;`,
    options: [
      { key: "A", text: "Bắt buộc không được phép viết bất kỳ dòng mã định nghĩa nào trong C++." },
      { key: "B", text: "Hàm thuần ảo vẫn có thể có định nghĩa mã nguồn riêng bên ngoài lớp, nhưng lớp đó vẫn là trừu tượng và con cháu vẫn phải override." },
      { key: "C", text: "Mọi hàm thuần ảo đều tự động giải phóng RAM." },
      { key: "D", text: "Chỉ được phép xuất hiện ở cấu trúc Struct." }
    ],
    correctAnswer: "B",
    explanation: "Một bẫy sâu sắc khác trong C++: Một hàm ảo thuần ảo `= 0` VẪN có thể định nghĩa phần thân mã của riêng mình (viết độc lập ngoài lớp). Việc này đôi khi hữu ích khi cung cấp một hành vi mặc định chung mà con cháu vẫn bắt buộc phải override hoặc gọi tường minh `Base::run()`. Lớp đó vẫn luôn bị chặn không cho khởi tạo đối tượng trực tiếp.",
    difficulty: "Khó"
  },
  {
    id: "q72",
    category: Category.POLYMORPHISM,
    questionText: "Phương thức nào dưới đây KHÔNG THỂ khai báo với từ khóa 'virtual' trong C++?",
    codeSnippet: `// Các phương thức đặc biệt trong class`,
    options: [
      { key: "A", text: "Phương thức của lớp trừu tượng." },
      { key: "B", text: "Hàm hủy (Destructor)." },
      { key: "C", text: "Phương thức tĩnh (Static member function) và Hàm khởi tạo (Constructor)." },
      { key: "D", text: "Phương thức nhận tham số đại diện." }
    ],
    correctAnswer: "C",
    explanation: "Vì phương thức tĩnh thuộc cấp độ lớp và hàm khởi tạo xử lý trước khi thực thể và con trỏ vptr được thành lập hoàn tất, cả hai tuyệt đối không bao giờ được phép đi kèm với đặc tính ảo virtual.",
    difficulty: "Dễ"
  },
  {
    id: "q73",
    category: Category.POLYMORPHISM,
    questionText: "Trong kế thừa lớp kim cương, tại sao cần sử dụng kế thừa ảo 'virtual inheritance' khi tạo ra các lớp cha trung gian B và C?",
    codeSnippet: `class B : virtual public A {};`,
    options: [
      { key: "A", text: "Để cho phép đối tượng lớp A được dọn dẹp sạch sẽ mảng tĩnh." },
      { key: "B", text: "Để chỉ duy nhất một bản sao duy nhất của lớp gốc A được đưa vào lớp con của cháu D, tránh trùng lặp dữ liệu và đa nghĩa dẫm đạp biến." },
      { key: "C", text: "Để chuyển vùng lưu trữ đối tượng sang phân vùng Heap vĩnh viễn." },
      { key: "D", text: "Đạt hiệu năng tính toán nhanh hơn gấp mười lần." }
    ],
    correctAnswer: "B",
    explanation: "Thiết kế kế thừa ảo (`virtual public`) giúp cho lớp con chung D cuối sơ đồ kim cương chỉ thừa hưởng đúng duy nhất 1 vùng nhớ chung đại diện cho gốc rễ A, giải phóng lỗi mơ hồ vô định khi truy xuất biến của ông nội A thông qua hai nhánh đường cha.",
    difficulty: "Trung bình"
  },
  {
    id: "q74",
    category: Category.POLYMORPHISM,
    questionText: "Tại sao phương thức không ảo (non-virtual function) không thể thực hiện đa hình động đa lớp?",
    codeSnippet: `// Khái niệm binding liên kết`,
    options: [
      { key: "A", text: "Vì các phương thức này luôn bị compiler khóa tĩnh qua liên kết sớm tại compile-time dựa trên kiểu khai báo vật lý của con trỏ." },
      { key: "B", text: "Vì hệ thống không cấp phát địa chỉ Heap cho hàm thường." },
      { key: "C", text: "Do C++ tự động chuyển hàm thường về inline hàm rỗng." },
      { key: "D", text: "Do thiếu con trỏ this bên trong tham số." }
    ],
    correctAnswer: "A",
    explanation: "Thiếu từ khóa `virtual` chặn đứng việc nạp tham số địa chỉ hàm vào Virtual Table. Trình biên dịch sẽ liên kết sớm tĩnh (Early binding) hàm đó ngay lúc dịch, nghĩa là kiểu của con trỏ quyết định hàm nào chạy chứ không dòm ngó thực thể.",
    difficulty: "Dễ"
  },
  {
    id: "q75",
    category: Category.POLYMORPHISM,
    questionText: "Đối tác nào của lớp dưới đây thực tế có thể gọi một hàm ảo thuần ảo của lớp đó?",
    codeSnippet: `// Cơ chế vận hành trừu tượng`,
    options: [
      { key: "A", text: "Tuyệt đối không có bất kỳ ai và bất cứ nơi nào gọi được hàm thuần ảo." },
      { key: "B", text: "Các phương thức thành viên khác hoặc Constructor của lớp trừu tượng đó có thể viết lời gọi đến hàm thuần ảo, vì tại runtime khi chạy cụ thể, lớp con của nó chắc chắn đã override hàm này." },
      { key: "C", text: "Chỉ các hàm toàn cục tĩnh ngoài hệ thống." },
      { key: "D", text: "Chỉ có thể chạy nếu nạp chồng toán tử gán." }
    ],
    correctAnswer: "B",
    explanation: "Lớp trừu tượng có thể viết lời gọi đến chính hàm thuần ảo của nó ngay trong các phương thức thường phi tĩnh khác. Khi runtime thực thi chạy ở các đối tượng con cháu, nó sẽ tự lách xuống hàm đã override ở con qua liên kết động, giúp tạo nên những bộ khung thiết kế cấu trúc vận hành cực kỳ chặt chẽ.",
    difficulty: "Khó"
  }
];
