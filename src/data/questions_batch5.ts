/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Question } from "../types";

export const BATCH5_QUESTIONS: Question[] = [
  {
    id: "q101",
    category: Category.BASICS,
    questionText: "Trong C++, biến tham chiếu (Reference variable) khác biệt căn bản nhất so với con trỏ (Pointer) ở điểm nào?",
    codeSnippet: `int x = 10;
int& ref = x; // ref là biến tham chiếu
int* ptr = &x; // ptr là con trỏ`,
    options: [
      { key: "A", text: "Biến tham chiếu tốn gấp đôi dung lượng bộ nhớ so với con trỏ." },
      { key: "B", text: "Biến tham chiếu bắt buộc phải được khởi tạo ngay khi khai báo, không thể trỏ sang vùng nhớ khác sau đó, và không thể mang giá trị NULL." },
      { key: "C", text: "Biến tham chiếu chỉ hoạt động trong hàm khởi tạo." },
      { key: "D", text: "Không có sự khác nhau nào về mặt cú pháp lẫn vùng nhớ." }
    ],
    correctAnswer: "B",
    explanation: "Biến tham chiếu (Reference) thực chất là một bí danh (alias) của một biến khác. Nó có 3 quy tắc thép: 1. Phải khởi tạo ngay lập tức khi khai báo; 2. Không thể gán lại để tham chiếu vùng nhớ khác; 3. Không thể mang trị NULL. Điều này làm cho tham chiếu an toàn hơn nhiều so với con trỏ thô.",
    difficulty: "Trung bình"
  },
  {
    id: "q102",
    category: Category.BASICS,
    questionText: "Khi truyền một đối tượng lớn vào hàm dưới dạng 'const MyClass& obj', mục đích tối thượng của việc kết hợp 'const' và '&' là gì?",
    codeSnippet: `void printData(const LargeClass& obj) {
    // Đoạn code đọc dữ liệu
}`,
    options: [
      { key: "A", text: "Để cho phép hàm chỉnh sửa tự do các thuộc tính private của LargeClass." },
      { key: "B", text: "Để loại bỏ hoàn toàn việc nhân bản đối tượng (tiết kiệm CPU/RAM) nhờ truyền tham chiếu, đồng thời dùng const bảo vệ đối tượng không bị sửa đổi ngoài ý muốn." },
      { key: "C", text: "Để chuyển vùng nhớ của obj từ Stack sang phân vùng Heap động." },
      { key: "D", text: "Để ép hệ thống gom rác ngay thời điểm hàm kết thúc." }
    ],
    correctAnswer: "B",
    explanation: "Truyền tham trị (by Value) đối tượng lớn sẽ kích hoạt Copy Constructor tạo bản sao gây tốn dung lượng RAM và thời gian chạy. Truyền tham chiếu (&) truyền trực tiếp địa chỉ ô nhớ cũ nên siêu nhanh, thêm 'const' để rào kín không cho phép sửa đổi dữ liệu bên trong hàm. Đây là mẫu thiết kế tối ưu kinh điển trong C++.",
    difficulty: "Dễ"
  },
  {
    id: "q103",
    category: Category.BASICS,
    questionText: "Từ khóa 'inline' đặt trước định nghĩa một phương thức trong hoặc ngoài Class nhằm đề xuất điều gì với trình biên dịch?",
    codeSnippet: `inline void display() {
    cout << "Short Output" << endl;
}`,
    options: [
      { key: "A", text: "Yêu cầu trình biên dịch dừng chương trình lập tức nếu xảy ra lỗi." },
      { key: "B", text: "Đề xuất trình biên dịch chèn trực tiếp toàn bộ mã nguồn của hàm vào vị trí gọi hàm thay vì thực hiện thủ tục nhảy ngăn xếp gọi hàm (call stack), giúp tăng tốc thực thi đối với các hàm cực ngắn." },
      { key: "C", text: "Biến hàm đó thành hàm thuần ảo tự động phục dịch đa hình." },
      { key: "D", text: "Bắt buộc hàm phải được phân bổ trên bộ nhớ cache của CPU." }
    ],
    correctAnswer: "B",
    explanation: "Từ khóa ngữ cảnh 'inline' là một lời gợi ý đến trình biên dịch. Để giảm thiểu chi phí overhead khi nhảy stack gọi hàm, compiler sẽ thay thế trực tiếp thân mã hàm vào nơi gọi. compiler hiện đại có thể tự động quyết định tối ưu hóa inline phương thức bất kể có ghi từ khóa hay không.",
    difficulty: "Trung bình"
  },
  {
    id: "q104",
    category: Category.BASICS,
    questionText: "Nếu một lớp C++ định nghĩa các phương thức nằm ngay bên trong lòng khai báo Class (định nghĩa trực tiếp trong file header .h), chúng mặc định mang tính chất gì?",
    codeSnippet: `class Math {
public:
    int add(int a, int b) { return a + b; } // Định nghĩa ngay trong class
};`,
    options: [
      { key: "A", text: "Mặc định được coi là các hàm 'inline' ngầm định." },
      { key: "B", text: "Mặc định mang tính chất static." },
      { key: "C", text: "Mặc định bị trình biên dịch từ chối và báo lỗi cú pháp." },
      { key: "D", text: "Trở thành các macro tiền xử lý." }
    ],
    correctAnswer: "A",
    explanation: "Trong C++, bất kỳ phương thức nào được định nghĩa đầy đủ phần mã nguồn ngay bên trong định nghĩa lớp sẽ được trình biên dịch tự động coi là hàm 'inline' ngầm định (implicit inline), không nhất thiết phải viết thêm từ khóa 'inline'.",
    difficulty: "Trung bình"
  },
  {
    id: "q105",
    category: Category.CONSTRUCTORS,
    questionText: "Tham số thứ nhất ngầm định được trình biên dịch truyền vào bất kỳ phương thức phi-tĩnh (non-static member function) nào của lớp là gì?",
    codeSnippet: `class Worker {
public:
    void doTask(); // Trình biên dịch truyền tham số ngầm nào?
};`,
    options: [
      { key: "A", text: "Con trỏ hàm hủy virtual destructor." },
      { key: "B", text: "Hằng số tham chiếu nullptr." },
      { key: "C", text: "Con trỏ ẩn 'this' trỏ tới chính đối tượng đang thực hiện cuộc gọi hàm." },
      { key: "D", text: "Địa chỉ biến toàn cục chứa lớp." }
    ],
    correctAnswer: "C",
    explanation: "Mọi phương thức không tĩnh trong Class khi biên dịch sẽ nhận một tham số đầu tiên ngầm định: con trỏ `this` (`ClassName* const`). Nhờ con trỏ `this` này, phương thức biết được cần trích xuất và thay đổi thuộc tính trên vùng nhớ cụ thể của thực thể nào đang kích hoạt.",
    difficulty: "Dễ"
  },
  {
    id: "q106",
    category: Category.CONSTRUCTORS,
    questionText: "Khi một phương thức được khai báo có đuôi 'const', kiểu dữ liệu thực tế của con trỏ 'this' bên trong phương thức đó bị biến đổi thế nào?",
    codeSnippet: `class Robot {
    int battery;
public:
    void scan() const {
        // Kiểu của con trỏ 'this' ở đây là gì?
    }
};`,
    options: [
      { key: "A", text: "this trở thành con trỏ rỗng nullptr." },
      { key: "B", text: "this đổi thành kiểu 'const Robot* const' (con trỏ hằng trỏ tới đối tượng hằng), ngăn chặn việc chỉnh sửa thuộc tính hoặc gọi hàm phi-const." },
      { key: "C", text: "this bị thu hồi hoàn toàn khỏi phạm vi hàm." },
      { key: "D", text: "this đổi thành kiểu tham chiếu rvalue reference (Robot&&)." }
    ],
    correctAnswer: "B",
    explanation: "Thông thường con trỏ `this` có kiểu `Class* const`. Khi thêm `const` vào cuối chữ ký hàm, kiểu của `this` chuyển thành `const Class* const` (trỏ tới vùng hằng). Do đó, bất kỳ hành vi sửa thuộc tính (ví dụ `battery = 100;`) đều sinh lỗi biên dịch ngay lập tức trừ khi biến đó được đánh dấu là `mutable`.",
    difficulty: "Khó"
  },
  {
    id: "q107",
    category: Category.BASICS,
    questionText: "Khi khởi tạo một đối tượng cục bộ thông thường không dùng toán tử 'new', vùng nhớ của đối tượng đó được cấp phát ở đâu?",
    codeSnippet: `void run() {
    Student s; // Vùng nhớ của 's' ở đâu?
}`,
    options: [
      { key: "A", text: "Cấp phát tại phân vùng Heap động." },
      { key: "B", text: "Cấp phát trên phân vùng Stack (ngăn xếp), tự động giải phóng khi ra khỏi khối hàm." },
      { key: "C", text: "Cấp phát tại vùng chứa mã nguồn chương trình." },
      { key: "D", text: "Cấp phát cố định trên ổ cứng SSD." }
    ],
    correctAnswer: "B",
    explanation: "Đối tượng cục bộ được khai báo bình thường trong hàm sẽ được cấp phát trực tiếp trên Stack. Vùng nhớ Stack này hoạt động theo nguyên tắc LIFO cực nhanh, và sẽ tự động được thu hồi dọn dẹp bằng cách gọi hàm hủy Destructor ngay khi biến rời khỏi phạm vi hoạt động của block chứa nó `{}`.",
    difficulty: "Dễ"
  },
  {
    id: "q108",
    category: Category.BASICS,
    questionText: "Kỹ thuật namespace trong C++ giải quyết xung đột nào lớn nhất trong hệ thống mã nguồn phức tạp?",
    codeSnippet: `namespace MyCompany { class DB {}; }
namespace ExternalLib { class DB {}; }`,
    options: [
      { key: "A", text: "Xung đột rò rỉ vùng nhớ dynamic leak." },
      { key: "B", text: "Xung đột trùng lặp đặt tên (name collision) các lớp, hàm, hoặc biến toàn cục khi tích hợp nhiều thư viện khác nhau." },
      { key: "C", text: "Xung đột hiệu năng xử lý đa luồng." },
      { key: "D", text: "Xung đột thứ tự khởi chạy constructor lớp cha." }
    ],
    correctAnswer: "B",
    explanation: "Namespace (không gian tên) nhóm các định nghĩa lớp, hàm dưới một nhãn không gian phân biệt. Nhờ namespace, hai thư viện hoàn toàn khác nhau có thể cùng đặt tên lớp là `DB` mà không hề bị lỗi trùng lặp khi biên dịch, lập trình viên truy cập qua toán tử phạm vi `MyCompany::DB` hoặc `ExternalLib::DB`.",
    difficulty: "Dễ"
  },
  {
    id: "q109",
    category: Category.BASICS,
    questionText: "Nhận định nào sau đây là CHÍNH XÁC về việc sử dụng cấu trúc 'using namespace std;' trong tệp tiêu đề (Header file .h)?",
    codeSnippet: `// Trong file Library.h
using namespace std; // Có tác hại gì?`,
    options: [
      { key: "A", text: "Đây là thói quen tốt giúp tăng tốc độ biên dịch mã nguồn." },
      { key: "B", text: "Làm giảm dung lượng của tập tin chạy nhị phân." },
      { key: "C", text: "Là một bad practice nguy hiểm (thảm họa namespace pollution), vì khi bất kỳ tệp nguồn nào gộp file .h này vào đều bị ép nạp toàn bộ không gian tên std, phá hủy tính đóng gói và dễ gây ra lỗi đụng độ tên." },
      { key: "D", text: "Bắt buộc phải ghi thì thư viện STL mới hoạt động." }
    ],
    correctAnswer: "C",
    explanation: "'using namespace std;' trong file header .h được coi là thảm họa ô nhiễm không gian tên (Namespace Pollution). Nó ép mọi file tệp nguồn import file header này phải mở toang namespace std, dẫn tới đụng độ tên cực kỳ khó gỡ. Lời khuyên chuẩn mực: Chỉ dùng chỉ thị này trong file .cpp hoặc ghi tường minh kiểu `std::string` ở file .h.",
    difficulty: "Khó"
  },
  {
    id: "q110",
    category: Category.CONSTRUCTORS,
    questionText: "Trong C++, điều gì xảy ra nếu lập trình viên không tự định nghĩa bất kỳ Hàm hủy (Destructor) nào cho một lớp?",
    codeSnippet: `class Account {
    int id;
};`,
    options: [
      { key: "A", text: "Trình biên dịch sẽ báo lỗi cú pháp yêu cầu phải bổ sung destructor." },
      { key: "B", text: "Trình biên dịch tự động tạo ra một Destructor mặc định rỗng để hủy các đối tượng thành viên cục bộ khi giải phóng bộ nhớ." },
      { key: "C", text: "Đối tượng không bao giờ bị hủy và gây rò rỉ RAM vĩnh viễn." },
      { key: "D", text: "Đối tượng tự chuyển đổi thành con trỏ tĩnh." }
    ],
    correctAnswer: "B",
    explanation: "Nếu không tự viết Destructor, C++ compiler sẽ tự tạo một Implicit Destructor mặc định. Hàm hủy ngầm định này sẽ hoạt động tuần tự gọi hàm hủy của tất cả các biến thành viên có cấu trúc dữ liệu phức tạp (như std::string, std::vector...) chứa trong lớp đó trước khi dọn RAM.",
    difficulty: "Dễ"
  },
  {
    id: "q111",
    category: Category.CONSTRUCTORS,
    questionText: "Trong trường hợp nào, việc dựa hoàn toàn vào Destructor mặc định được sinh tự động bởi trình biên dịch sẽ gây ra rò rỉ bộ nhớ (Memory Leak)?",
    codeSnippet: `class ResourceManager {
    int* buffer;
public:
    ResourceManager() { buffer = new int[500]; }
    // Không khai báo destructor hủy buffer!
};`,
    options: [
      { key: "A", text: "Khi đối tượng chứa bất kỳ biến hằng nào." },
      { key: "B", text: "Khi đối tượng chứa thuộc tính là con trỏ đang nắm giữ những tài nguyên cấp phát động trên Heap (mảng động, file reader, database hook) mà không được delete thủ công tại destructor." },
      { key: "C", text: "Khi lớp con thực hiện đa kế thừa public." },
      { key: "D", text: "Khi đối tượng được khai báo dạng const tĩnh." }
    ],
    correctAnswer: "B",
    explanation: "Destructor mặc định chỉ giải phóng các biến lưu trên phần vùng Stack (gồm địa chỉ con trỏ thô `int* buffer`). Tuy nhiên, lõi vùng nhớ Heap cấp phát bởi toán tử `new int[500]` không hề bị tự động thu hồi. Do đó, nếu không viết Destructor để `delete[] buffer;` thủ công, vùng nhớ Heap này sẽ thất lạc vĩnh viễn trong RAM.",
    difficulty: "Trung bình"
  },
  {
    id: "q112",
    category: Category.CONSTRUCTORS,
    questionText: "Toán tử gán mặc định (Default Copy Assignment Operator - operator=) do trình biên dịch sinh ra thực hiện cơ chế sao chép nào?",
    codeSnippet: `MyClass a;
MyClass b = a; // Hoạt động gán ngầm định`,
    options: [
      { key: "A", text: "Thực hiện phép sao chép sâu (Deep Copy) toàn bộ con trỏ." },
      { key: "B", text: "Thực hiện sao chép nông từng thành viên (Shallow Copy / Memberwise Copy)." },
      { key: "C", text: "Chuyển giao quyền sở hữu vùng nhớ theo cơ chế Move Semantics." },
      { key: "D", text: "Luôn báo lỗi nếu lớp có thuộc tính kiểu chuỗi." }
    ],
    correctAnswer: "B",
    explanation: "Mặc định, trình biên dịch tự động cung cấp toán tử gán sao chép nông bằng cách copy nguyên xi giá trị của từng biến từ đối tượng nguồn sang đích. Nếu lớp có chứa con trỏ trỏ Heap, cả 2 đối tượng sau phép gán sẽ cùng trỏ vào một ô nhớ Heap duy nhất, gây ra lỗi nghiêm trọng Double Free khi bị hủy.",
    difficulty: "Trung bình"
  },
  {
    id: "q113",
    category: Category.CONSTRUCTORS,
    questionText: "Quy tắc 'Rule of Three' (Quy tắc số ba) truyền thống trong quản lý tài nguyên C++ khuyên nếu bạn tự định nghĩa một trong ba hàm đặc biệt, bạn nên tự định nghĩa cả hai hàm còn lại. Ba hàm đó là gì?",
    codeSnippet: `// Triết lý thiết kế tài nguyên an toàn`,
    options: [
      { key: "A", text: "Default Constructor, Parameterized Constructor, Move Constructor" },
      { key: "B", text: "Destructor, Copy Constructor, Copy Assignment Operator (Toán tử gán sao chép)" },
      { key: "C", text: "Virtual Destructor, Friend Function, Static Initializer" },
      { key: "D", text: "Operator+, Operator-, Operator=" }
    ],
    correctAnswer: "B",
    explanation: "Nếu một lớp cần viết thủ công (1) Destructor để dọn tài nguyên nâng cao, điều đó chứng tỏ lớp đó đang quản lý tài nguyên động. Vậy bạn cũng hầu như chắc chắn phải viết thêm (2) Copy Constructor và (3) Copy Assignment Operator để xử lý phép sao chép sâu (Deep Copy), tránh lỗi chém ô nhớ trong RAM.",
    difficulty: "Trung bình"
  },
  {
    id: "q114",
    category: Category.CONSTRUCTORS,
    questionText: "Từ C++11, quy tắc 'Rule of Five' (Quy tắc số năm) mở rộng bổ sung thêm hai hàm đặc biệt nào bên cạnh Rule of Three để tăng tốc độ xử lý tài nguyên tạm thời?",
    codeSnippet: `// Quản lý tài nguyên hiện đại`,
    options: [
      { key: "A", text: "Hàm ảo thuần khiết và hàm hằng tĩnh" },
      { key: "B", text: "Move Constructor (Hàm khởi tạo di chuyển) và Move Assignment Operator (Toán tử gán di chuyển)" },
      { key: "C", text: "Operator[] và Operator()" },
      { key: "D", text: "Friend class và Nested class" }
    ],
    correctAnswer: "B",
    explanation: "Nhờ cơ chế Move Semantics xuất hiện từ C++11, ta có thêm Move Constructor và Move Assignment Operator (sử dụng toán tử tham chiếu rvalue `&&`). Chúng cho phép trút vùng dữ liệu Heap từ đối tượng tạm thời sắp biến mất sang đối tượng đích với chi phí bằng 0, nâng hiệu năng hệ thống lên vượt trội.",
    difficulty: "Khó"
  },
  {
    id: "q115",
    category: Category.CONSTRUCTORS,
    questionText: "Trong C++11, cú pháp khai báo nào bắt buộc trình biên dịch phải khóa (không tự động tạo ra) Copy Constructor để ngăn chặn việc nhân bản đối tượng?",
    codeSnippet: `class UniqueEngine {
    // Làm thế nào để vô hiệu hóa việc copy?
};`,
    options: [
      { key: "A", text: "Vào hàm main gán đối tượng bằng nullptr." },
      { key: "B", text: "UniqueEngine(const UniqueEngine& other) = delete;" },
      { key: "C", text: "UniqueEngine(const UniqueEngine& other) = default;" },
      { key: "D", text: "Đặt từ khóa explicit trước hàm copy." }
    ],
    correctAnswer: "B",
    explanation: "Chỉ thị `= delete;` (C++11) là vũ khí cực kỳ tin cậy để lập trình viên tắt đi các tính năng ngầm định của C++. Viết `UniqueEngine(const UniqueEngine& other) = delete;` báo cho compiler chặn đứng mọi hành vi cố ý sao chép đối tượng này, thường dùng trong thiết kế Singleton hoặc lớp quản lý độc quyền tống kết luồng nối.",
    difficulty: "Trung bình"
  },
  {
    id: "q116",
    category: Category.CONSTRUCTORS,
    questionText: "Mã nguồn dưới đây in ra thông tin nào? Chú ý hành vi copy constructor của tham số.",
    codeSnippet: `#include <iostream>
using namespace std;

class Item {
public:
    Item() {}
    Item(const Item& other) { cout << "C "; }
};

void show(Item a) { // Tham số truyền vào dạng gì?
}

int main() {
    Item it;
    show(it);
    return 0;
}`,
    options: [
      { key: "A", text: "In ra: C " },
      { key: "B", text: "Không in ra gì cả." },
      { key: "C", text: "Biên dịch báo lỗi cú pháp." },
      { key: "D", text: "Chương trình dính lỗi lặp vô hạn." }
    ],
    correctAnswer: "A",
    explanation: "Khi truyền tham số vào hàm bằng cơ chế tham trị (by value) như `void show(Item a)`, trình biên dịch buộc phải gọi Copy Constructor của lớp `Item` để nhân bản một bản sao của đối tượng `it` nạp vào Stack của hàm `show`. Cuộc gọi copy constructor này in ra chữ 'C '.",
    difficulty: "Trung bình"
  },
  {
    id: "q117",
    category: Category.CONSTRUCTORS,
    questionText: "Tại sao phương thức hủy (Destructor) tuyệt đối không được phép ném ra ngoại lệ (exception) trong quá trình hoạt động dọn dẹp?",
    codeSnippet: `~MyClass() {
    if (error) throw std::exception(); // Có tác hại gì?
}`,
    options: [
      { key: "A", text: "Trình biên dịch sẽ lập tức chuyển hàm hủy thành hàm ảo." },
      { key: "B", text: "Nếu một Destructor ném exception trong quá trình giải phóng vùng nhớ đang diễn ra (Stack Unwinding do lỗi trước đó), C++ sẽ không thể bắt lỗi chấn lồng nhau và tự động kích hoạt std::terminate() để cưỡng chế sập ngay chương trình." },
      { key: "C", text: "Destructor bị buộc phải dừng chạy và giữ nguyên RAM." },
      { key: "D", text: "Làm rò rỉ vùng nhớ ngăn xếp Stack." }
    ],
    correctAnswer: "B",
    explanation: "Trong C++, khi một exception ném ra, cơ chế Stack Unwinding dọn dẹp các đối tượng Stack dọc đường bằng cách kích hoạt Destructor của chúng. Nếu trong lúc đang dọn dẹp này, một Destructor lại tiếp tục dại dột ném ra thêm 1 exception mới, hệ thống C++ sẽ mất kiểm soát vì có 2 lỗi đồng thời. Chương trình lập tức Crash qua lời gọi `std::terminate()`. Do đó, Destructor bắt buộc phải an toàn và tự bọc catch cục bộ.",
    difficulty: "Khó"
  },
  {
    id: "q118",
    category: Category.BASICS,
    questionText: "Từ khóa 'static' đặt trước một thuộc tính dữ liệu trong Class mang ý nghĩa gì?",
    codeSnippet: `class Counter {
    static int globalVal; // Biến static
};`,
    options: [
      { key: "A", text: "Biến này chỉ được sử dụng cho hằng đối tượng const." },
      { key: "B", text: "Biến này trở thành thuộc tính dùng chung duy nhất cho toàn bộ lớp, được cấp phát bộ nhớ cố định một lần duy nhất và tồn tại độc lập kể cả khi không có bất kỳ đối tượng nào của lớp đó được tạo ra." },
      { key: "C", text: "Biến này tự biến đổi thành con trỏ dynamic ptr." },
      { key: "D", text: "Vô hiệu hóa quyền truy cập private của biến." }
    ],
    correctAnswer: "B",
    explanation: "Biến thuộc tính tĩnh (static member variable) thuộc về toàn quyền quản lý tầm lớp, chứ không phải nằm riêng lẻ của từng cụm đối tượng. Mọi thực thể của lớp đều nhìn thấy và thao tác chung trên đúng 1 vùng RAM vật lý tĩnh này.",
    difficulty: "Dễ"
  },
  {
    id: "q119",
    category: Category.BASICS,
    questionText: "Một Phương thức tĩnh (static member function) trong C++ có điểm giới hạn đặc thù nào lớn nhất so với phương thức thông thường?",
    codeSnippet: `class Account {
    static int rate;
    int balance;
public:
    static void update() {
        // Có thể truy cập biến nào ở đây?
    }
};`,
    options: [
      { key: "A", text: "Hàm static không thể nhận tham số đầu vào." },
      { key: "B", text: "Hàm static không sở hữu con trỏ 'this', do thế nó chỉ có thể truy xuất trực tiếp các thành viên static khác của lớp chứ không được truy xuất các biến/hàm phi-tĩnh thông thường của đối tượng." },
      { key: "C", text: "Hàm static bắt buộc phải là hàm ảo." },
      { key: "D", text: "Chỉ được gọi từ các lớp con kế thừa." }
    ],
    correctAnswer: "B",
    explanation: "Do không hoạt động trên một đối tượng cụ thể nào, Hàm thành viên static được triệu gọi trực tiếp qua cú pháp `Account::update()` mà không có con trỏ `this`. Do đó nó hoàn toàn 'mù' trước các thuộc tính đối tượng phi-static thông thường (như `balance`), trừ phi ta truyền đối tượng tường minh qua tham số.",
    difficulty: "Trung bình"
  },
  {
    id: "q120",
    category: Category.INHERITANCE,
    questionText: "Khi khởi dựng một đối tượng của lớp Con (Derived class), thứ tự chạy chính xác của các Constructor là gì?",
    codeSnippet: `class Base {};
class Derived : public Base {};
Derived d; // Khởi tạo chạy thế nào?`,
    options: [
      { key: "A", text: "Constructor của lớp Con chạy trước rồi mới đến Base." },
      { key: "B", text: "Constructor của lớp Con và Cha chạy song song." },
      { key: "C", text: "Constructor của lớp Cha (Base Class) được kích hoạt chạy trước hoàn thành để xây móng, sau đó mới đến lượt Constructor của lớp Con (Derived Class) thực hiện khởi dựng." },
      { key: "D", text: "Chỉ có constructor lớp Con được chạy, lớp Cha bị bỏ qua." }
    ],
    correctAnswer: "C",
    explanation: "Quy tắc xây dựng kim tự tháp: Để khởi dựng lớp Con thì phần nền bóng cấu trúc thừa hưởng từ lớp Cha phải được định hình hoàn thiện trước. Trình biên dịch C++ âm thầm gọi constructor lớp Cha trước tại danh sách khởi tạo rồi mới đi xuống thực thi các lệnh trong khối `{}` của lớp Con.",
    difficulty: "Dễ"
  },
  {
    id: "q121",
    category: Category.INHERITANCE,
    questionText: "Khi hủy một đối tượng của lớp Con (Derived class) cấp phát tĩnh hoặc động, các Destructors sẽ chạy theo trình tự nào?",
    codeSnippet: `// Quá trình giải phóng vùng nhớ con-cha`,
    options: [
      { key: "A", text: "Ngược lại với quá trình khởi dựng: Destructor của lớp Con chạy hoàn thành giải phóng tài nguyên riêng trước, sau đó mới trôi ngược lên kích hoạt dọn dẹp Destructor của lớp Cha." },
      { key: "B", text: "Hàm hủy lớp Cha chạy dọn dẹp sạch sẽ rồi mới tới lớp Con." },
      { key: "C", text: "Hai hàm hủy tự triệt tiêu lẫn nhau không chạy dòng code nào." },
      { key: "D", text: "Chỉ có destructor lớp Cha chạy vì nó ở phân vùng tổng quát." }
    ],
    correctAnswer: "A",
    explanation: "Trình tự hủy diệt đi ngược hoàn toàn trình tự xây dựng cốt lõi. Lớp Con dọn dẹp các tài nguyên mở rộng riêng của mình trước (Destructor Con chạy trước), sau đó luồng hủy mới kích hoạt dọn dẹp phần tài nguyên gốc thừa hưởng thuộc lớp Cha. Điều này bảo vệ an toàn dữ liệu không bị thất lạc giữa chừng.",
    difficulty: "Dễ"
  },
  {
    id: "q122",
    category: Category.INHERITANCE,
    questionText: "Trong hệ kế thừa đa cấp (Multilevel Inheritance: Base -> Intermediate -> Derived), Constructor của Base được khởi dựng ở vị trí nào?",
    codeSnippet: `class Base {};
class Intermediate : public Base {};
class Derived : public Intermediate {};`,
    options: [
      { key: "A", text: "Sau khi Intermediate khởi dựng xong." },
      { key: "B", text: "Được kích hoạt chạy đầu tiên trước khi mọi lớp trung gian và lớp con tiến hành khởi tạo." },
      { key: "C", text: "Ở vị trí ngẫu nhiên do hệ điều hành cấp." },
      { key: "D", text: "Không hề chạy constructor của Base." }
    ],
    correctAnswer: "B",
    explanation: "Bất kể cây gia đình sâu bao nhiêu tầng, lớp gốc rễ thủy tổ `Base` luôn luôn là viên gạch nền tảng được đặt xuống tiên phong nhất, chạy constructor trước Intermediate, rồi mới đến lượt Derived.",
    difficulty: "Trung bình"
  },
  {
    id: "q123",
    category: Category.INHERITANCE,
    questionText: "Lỗi 'Diamond Problem' (Lỗi Kim Cương) xảy ra trong cấu trúc sơ đồ kế thừa nào dưới đây?",
    codeSnippet: `// Sơ đồ đa kế thừa phức tạp`,
    options: [
      { key: "A", text: "Lớp A kế thừa từ B, B kế thừa từ C, C kế thừa từ A." },
      { key: "B", text: "Đa cấp kế thừa sâu quá 10 cấp." },
      { key: "C", text: "Một lớp Con kế thừa từ hai lớp Cha khác biệt, mà cả hai lớp Cha này lại cùng kế thừa từ một lớp Ông Nội duy nhất." },
      { key: "D", text: "Lớp Con trùng tên với lớp Cha." }
    ],
    correctAnswer: "C",
    explanation: "Khi lớp D kế thừa từ B và C, vốn dĩ chúng cùng chung nhánh gốc A. Lúc con cháu D cố gọi một biến thuộc về ông nội A, trình biên dịch sẽ bối rối hỏi: biến này thừa kế qua nhánh đường của cha B hay cha C? Lỗi mơ hồ này gọi là sự cố Diamond nguy hiểm, giải quyết nhờ kế thừa ảo (virtual inheritance).",
    difficulty: "Dễ"
  },
  {
    id: "q124",
    category: Category.OPERATORS,
    questionText: "Ý nghĩa của việc nạp chồng toán tử gán sao chép bằng chữ ký đặc tả 'MyClass& operator=(const MyClass& other);' trả về liên kết tham chiếu là gì?",
    codeSnippet: `MyClass a, b, c;
a = b = c; // Phép gán liên hồi`,
    options: [
      { key: "A", text: "Để cho phép viết mã lồng nhau rườm rà." },
      { key: "B", text: "Để hỗ trợ chuỗi phép gán liên tiếp (Chained Assignment) hoạt động mượt mà từ phải qua trái." },
      { key: "C", text: "Để loại bỏ hàm hủy của đối tượng nguồn." },
      { key: "D", text: "Trả về tham chiếu giúp tăng tốc độ nạp nén của đĩa cứng." }
    ],
    correctAnswer: "B",
    explanation: "Khi trả về tham chiếu đến chính đối tượng đích `*this`, phép gán `b = c` trả về kết quả là thực thể `b` dạng tham chiếu, giúp phép gán tiếp theo `a = (b = c)` thực thi liền mạch. Thiếu tham chiếu trả về (ví dụ trả về `void`), ta sẽ bị báo lỗi khi ghi phép gán chuỗi.",
    difficulty: "Trung bình"
  },
  {
    id: "q125",
    category: Category.BASICS,
    questionText: "Biến thành viên dữ liệu được đánh dấu là 'volatile' báo hiệu điều gì cho bộ tối ưu hóa của trình biên dịch C++?",
    codeSnippet: `volatile int hardwareSignal;`,
    options: [
      { key: "A", text: "Biến này sắp sửa bị hủy tự động khỏi Stack." },
      { key: "B", text: "Yêu cầu trình biên dịch không được phép áp dụng cơ chế tối ưu hóa lưu biến trên thanh ghi (cache registers), buộc phải luôn đọc thực tế giá trị của biến trực tiếp từ ô nhớ RAM vì giá trị của nó có thể thay đổi bất ngờ từ tác nhân phần cứng bên ngoài luồng chạy." },
      { key: "C", text: "Biến này chỉ dùng cho phép toán cộng ảo." },
      { key: "D", text: "Biến này có thể chuyển thành string tự chế." }
    ],
    correctAnswer: "B",
    explanation: "Từ khóa 'volatile' chỉ dẫn trình tối ưu hóa (optimizer) rằng giá trị của biến này có thể thay đổi bất ngờ ngoài tầm kiểm soát của luồng code đang biên dịch (ví dụ: ngắt phần cứng, luồng hệ điều hành khác ghi trị). compiler sẽ luôn sinh lệnh đọc trị từ RAM thật thay vì tái sử dụng giá trị cache cũ.",
    difficulty: "Khó"
  }
];
