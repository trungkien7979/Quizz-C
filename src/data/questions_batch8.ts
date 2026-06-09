/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Question } from "../types";

export const BATCH8_QUESTIONS: Question[] = [
  {
    id: "q176",
    category: Category.ADVANCED,
    questionText: "Trong STL C++, đối tượng Functor (Function Object) thực chất được tạo ra thông qua kỹ thuật nạp chồng toán tử nào?",
    codeSnippet: `class Scale {
    int factor;
public:
    Scale(int f) : factor(f) {}
    // Toán tử nào biến Scale thành Functor?
};`,
    options: [
      { key: "A", text: "Toán tử gọi hàm 'operator()'." },
      { key: "B", text: "Toán tử chuyển đổi kiểu 'operator void*()'." },
      { key: "C", text: "Toán tử gán sao chép 'operator='." },
      { key: "D", text: "Toán tử lấy địa chỉ 'operator&'." }
    ],
    correctAnswer: "A",
    explanation: "Functor (Function Object) là một thực thể đối tượng nhưng lại có thể sử dụng cú pháp trông giống như một lời gọi hàm thông thường. Để đạt được điều này, lớp của thực thể đó phải định nghĩa nạp chồng toán tử gọi hàm `operator()`. Nó được ứng dụng siêu rộng rãi trong các giải thuật STL để truyền bộ lọc logic.",
    difficulty: "Trung bình"
  },
  {
    id: "q177",
    category: Category.ADVANCED,
    questionText: "Ưu thế vượt trội nhất của một Functor (Function Object) so với một con trỏ hàm (Pointer to Function) truyền thống là gì?",
    codeSnippet: `// Khác biệt cốt lõi Functor vs function pointer`,
    options: [
      { key: "A", text: "Functor chạy nhanh hơn gấp 10 lần vì nó được biên dịch sang mã Assembly." },
      { key: "B", text: "Functor có thể mang trạng thái nội bộ (chứa thuộc tính, biến thành viên lưu thông tin liên tục sau mỗi cuộc gọi), đồng thời dễ dàng được tối ưu hóa inline trực tiếp bởi trình biên dịch." },
      { key: "C", text: "Con trỏ hàm không bao giờ giải phóng được RAM." },
      { key: "D", text: "Functor bắt buộc phải có thuộc tính static." }
    ],
    correctAnswer: "B",
    explanation: "Vì Functor thực chất là một đối tượng đầy đủ của một lớp, nó có khả năng lưu trữ trạng thái (state) nội bộ thông qua các biến thành viên của nó giữa những lần gọi khác nhau - điều mà hàm thông thường dứt khoát không làm được trừ phi dùng biến toàn cục rườm rà. Ngoài ra, do kiểu của Functor được xác định tĩnh lúc compile, trình biên dịch dễ dàng thực hiện tối ưu hóa inline mã nguồn.",
    difficulty: "Khó"
  },
  {
    id: "q178",
    category: Category.ADVANCED,
    questionText: "Sử dụng smart pointer 'std::weak_ptr' kết nối với 'std::shared_ptr' đóng góp vai trò gì trong việc xử lý liên kết vòng tròn?",
    codeSnippet: `std::weak_ptr<User> observer; // observer liên kết thế nào?`,
    options: [
      { key: "A", text: "Nó tự động nhân đôi bộ đếm tham chiếu để tránh huỷ đối tượng sớm." },
      { key: "B", text: "Nó dùng để lưu trữ dữ liệu dạng mảng động nhãn tĩnh." },
      { key: "C", text: "Nó liên kết và quan sát tài nguyên của shared_ptr nhưng KHÔNG làm tăng bộ đếm tham chiếu (Reference Count). Nhờ thế phá vỡ thế bế tắc chu kỳ lặp và ngăn rò rỉ bộ nhớ triệt để." },
      { key: "D", text: "Nó được dùng làm một hàm ảo đa hình." }
    ],
    correctAnswer: "C",
    explanation: "`std::weak_ptr` được ví như một người quan sát thụ động (non-owning observer). Nó chỉ giữ tham chiếu yếu tới vùng nhớ do `shared_ptr` quản lý mà không can thiệp nâng bộ đếm tham chiếu. Nếu muốn thao tác dữ liệu, weak_ptr phải thực hiện kiểm tra kiểm và thăng cấp tạm thời thành shared_ptr qua phương thức `.lock()`.",
    difficulty: "Khó"
  },
  {
    id: "q179",
    category: Category.ADVANCED,
    questionText: "Một Con trỏ treo (Dangling Pointer) phát sinh lỗi nghiêm trọng nhất khi nào trong lập trình C++?",
    codeSnippet: `int* ptr = new int(10);
delete ptr; // Dangling Pointer bắt đầu xuất hiện thế nào?`,
    options: [
      { key: "A", text: "Khi ta cố gắng gán ptr bằng nullptr." },
      { key: "B", text: "Khi ta giải phóng bộ nhớ của con trỏ (delete) nhưng không xóa liên kết cũ (không gán lại ptr = nullptr). Con trỏ này vẫn lưu giữ địa chỉ cũ và nguy hại hơn là luồng code sau đó lại cố đọc/ghi dữ liệu từ địa chỉ đã thu hồi đó." },
      { key: "C", text: "Khi con trỏ được truyền dưới dạng tham chiếu hằng." },
      { key: "D", text: "Khi ta biên dịch mã nguồn sang hệ nhị phân DLL." }
    ],
    correctAnswer: "B",
    explanation: "Dangling pointer (Con trỏ lơ lửng / mồ côi) trỏ thẳng vào nấm mồ ô nhớ cũ đã bị thu hồi trả lại cho hệ điều hành kiểm soát. Việc can can thiệp vào mảnh đất hoang này sẽ sinh ra lỗi vi phạm phân đoạn bộ nhớ (Segmentation Fault) hoặc làm hỏng dữ liệu của các cấu trúc phần mềm khác đang mượn vùng RAM đó.",
    difficulty: "Trung bình"
  },
  {
    id: "q180",
    category: Category.BASICS,
    questionText: "Lỗi 'Stack Overflow' (Tràn ngăn xếp) thường bị kích hoạt chủ yếu do kịch bản lập trình phi kỹ thuật nào?",
    codeSnippet: `void test() { test(); } // Kịch bản rủi ro`,
    options: [
      { key: "A", text: "Do cấp phát quá nhiều mảng động bằng toán tử 'new'." },
      { key: "B", text: "Do các hàm đệ quy sâu vô hạn, hoặc khai báo mảng tĩnh cục bộ có dung lượng vượt quá giới hạn mặc định của phân vùng nhớ Stack vốn dĩ rất nhỏ bé." },
      { key: "C", text: "Do chương trình tải quá nhiều file thư viện động .dll lúc khởi động." },
      { key: "D", text: "Do gọi hàm hủy ảo quá nhiều lần lặp nhau." }
    ],
    correctAnswer: "B",
    explanation: "Phân vùng bộ nhớ Stack có kích thước cực kỳ giới hạn (thường chỉ 1 -> 8MB tùy thuộc hệ điều hành và cấu hình trình biên dịch). Các lệnh gọi đệ quy không có điểm dừng sẽ nhồi liên tục môi trường hàm (activation record) vào Stack, hoặc khai báo mảng tĩnh siêu to khổng lồ sẽ đè sập giới hạn này sinh lỗi Stack Overflow lập tức.",
    difficulty: "Dễ"
  },
  {
    id: "q181",
    category: Category.BASICS,
    questionText: "Phát biểu nào sau đây đúng khi so sánh phân vùng nhớ Stack và Heap trong quản lý bộ nhớ C++?",
    codeSnippet: `// So sánh Stack và Heap`,
    options: [
      { key: "A", text: "Stack do người code tự dọn dẹp bằng tay, Heap tự động dọn khi dập khối lệnh." },
      { key: "B", text: "Stack luôn chạy chậm hơn Heap vì phải sắp xếp ô nhớ." },
      { key: "C", text: "Stack cấp phát và thu hồi siêu tốc tự động nhờ con trỏ CPU Stack Pointer. Heap cung cấp dung lượng lưu trữ cực kỳ khổng lồ nhưng tốc độ chậm hơn nhiều do CPU phải đi quét thuật toán dò tìm ô nhớ trống phù hợp và đòi hỏi lập trình viên phải dọn dẹp bằng tay toán tử delete." },
      { key: "D", text: "Trọng lượng và cấu trúc của cả hai phân vùng hoàn toàn tương phản và đồng nhất." }
    ],
    correctAnswer: "C",
    explanation: "Stack là làn đường cao tốc (quản lý vùng nhớ theo cơ chế LIFO bám sát vòng đời hàm). Heap là đại dương bao la (cho phép lưu trữ dữ liệu bền vững, tự do định đoạt sinh và hủy nhưng cần thời gian xử lý và cẩn thận tránh rò rỉ dòng chảy RAM).",
    difficulty: "Dễ"
  },
  {
    id: "q182",
    category: Category.BASICS,
    questionText: "Khi bạn khai báo một mảng động như 'int* arr = new int[100];', thao tác giải phóng vùng nhớ bắt buộc chuẩn xác là gì để tránh rò rỉ từng phần tử?",
    codeSnippet: `int* arr = new int[100];
// Code dọn dẹp mảng?`,
    options: [
      { key: "A", text: "delete arr;" },
      { key: "B", text: "delete[] arr;" },
      { key: "C", text: "free(arr);" },
      { key: "D", text: "arr = nullptr;" }
    ],
    correctAnswer: "B",
    explanation: "Nếu bạn viết `delete arr;`, C++ chỉ kích hoạt dọn dẹp duy nhất phần tử đầu tiên và bỏ quên hoàn toàn 99 ô nhớ còn lai. Để dọn dẹp cả một mảng động, bạn bắt buộc phải dùng toán tử `delete[] arr;` để thông báo cho trình chạy biết cần quay vòng lặp kích hoạt cấu trúc dọn dẹp trên toàn mảng.",
    difficulty: "Dễ"
  },
  {
    id: "q183",
    category: Category.OPERATORS,
    questionText: "Nhận định nào dưới đây là ĐÚNG về nạp chồng toán tử gán sao chép 'operator='?",
    codeSnippet: `class Network {
    // operator= có được kế thừa?
};`,
    options: [
      { key: "A", text: "operator= là một thành viên đặc biệt không bao giờ được tự động kế thừa ở lớp con. Lớp con sẽ tự nhận bản sinh tự động riêng của nó." },
      { key: "B", text: "operator= có thể đăng ký dạng static." },
      { key: "C", text: "operator= bắt buộc phải là hàm độc lập nằm ngoài lớp (non-member)." },
      { key: "D", text: "Không có câu nào đúng." }
    ],
    correctAnswer: "A",
    explanation: "Tương tự như Constructor và Destructor, toán tử gán `operator=` là phương thức đặc biệt gắn chặt với chi tiết thuộc tính cấu tạo của riêng lớp đó, nên không bao giờ được phép thừa hưởng phân cấp kế thừa từ cha xuống con. Mỗi lớp con đều tự xây dựng hay tự thừa nhận một toán tử gán riêng biệt đặc hữu cho cấu trúc của mình.",
    difficulty: "Trung bình"
  },
  {
    id: "q184",
    category: Category.INHERITANCE,
    questionText: "Trong đa kế thừa C++, hiện tượng mơ hồ tên phương thức (Ambiguity) xảy ra khi nào và xử lý ra sao?",
    codeSnippet: `class A { public: void foo(); };
class B { public: void foo(); };
class C : public A, public B {};`,
    options: [
      { key: "A", text: "Chương trình tự động hủy hàm foo() và cảnh báo." },
      { key: "B", text: "Chương trình biên dịch lỗi mơ hồ khi gọi 'c.foo()', xử lý thông qua việc chỉ định rõ ràng không gian cha lúc gọi 'c.A::foo();'." },
      { key: "C", text: "Hàm của lớp B tự động triệt tiêu hàm của A." },
      { key: "D", text: "Lập trình viên bắt buộc phải đổi tên các phương thức khác hẳn nhau." }
    ],
    correctAnswer: "B",
    explanation: "Khi hai lớp cha `A` và `B` cùng chứa chính xác phương thức `foo()`, lớp con `C` mang cả hai dòng máu dại dột triệu gọi `c.foo();` sẽ kích hoạt lỗi mập mờ ngã rẽ. Việc chỉ định rõ tầm vực qua toán tử phạm vi `c.A::foo();` giúp trình biên dịch lập tức tháo gỡ điểm lỗi bế tắc.",
    difficulty: "Trung bình"
  },
  {
    id: "q185",
    category: Category.POLYMORPHISM,
    questionText: "Đối với lớp cơ sở trừu tượng có phương thức ảo, việc thêm ký ký tự '= 0' sau nguyên mẫu hàm biểu trưng cho điều gì?",
    codeSnippet: `virtual void calculate() = 0;`,
    options: [
      { key: "A", text: "Gán giá trị mặc định của phép toán trả về là 0." },
      { key: "B", text: "Biến phương thức đó thành hàm hằng const tĩnh." },
      { key: "C", text: "Khai báo hàm ảo thuần khiết (Pure Virtual Function), biến lớp chứa nó thành lớp trừu tượng (Abstract Class) không thể khởi tạo thực thể trực tiếp." },
      { key: "D", text: "Chỉ cho phép chạy trong môi trường thread chính." }
    ],
    correctAnswer: "C",
    explanation: "Cú pháp `= 0` là cách độc đáo trong C++ để đánh dấu hàm ảo thuần khiết (Pure Virtual Function). Hàm này không có phần mã triển khai ở lớp cha, ép toàn bộ lớp con kế thừa bắt buộc phải override định nghĩa hàm và khóa khả năng instantiate thực thể trực tiếp của lớp cha đó.",
    difficulty: "Dễ"
  },
  {
    id: "q186",
    category: Category.ADVANCED,
    questionText: "Cơ chế RTTI (Run-Time Type Information) trong C++ cung cấp hai công cụ/toán tử quan trọng nào để truy xuất kiểu dữ liệu thực tế lúc chương trình đang chạy?",
    codeSnippet: `// Trích xuất kiểu động`,
    options: [
      { key: "A", text: "static_cast và reinterpret_cast" },
      { key: "B", text: "dynamic_cast và typeid" },
      { key: "C", text: "try và catch" },
      { key: "D", text: "sizeof và operator new" }
    ],
    correctAnswer: "B",
    explanation: "RTTI cung cấp `dynamic_cast` dùng để thực hiện phép ép kiểu con trỏ an toàn xuôi dòng cây kế thừa, và toán tử `typeid` trả về đối tượng `std::type_info` tiết lộ chính xác tên lớp thực tế đang thực thi trong bộ nhớ RAM lúc runtime.",
    difficulty: "Trung bình"
  },
  {
    id: "q187",
    category: Category.OPERATORS,
    questionText: "Nhận định nào sau đây là CHÍNH XÁC về việc nạp chồng toán tử gán sao chép 'operator=' cho lớp?",
    codeSnippet: `// Quy tắc cốt lõi về operator=`,
    options: [
      { key: "A", text: "Nó bắt buộc phải được khai báo dạng một Phương thức thành viên (Member Function) của lớp, tuyệt đối không được viết ngoài dạng non-member." },
      { key: "B", text: "Nó có thể khai báo dạng Friend rực rỡ ngoài class." },
      { key: "C", text: "Nó bắt buộc phải trả về kiểu void." },
      { key: "D", text: "Nó có thể tự gọi hàm hủy virtual destructor." }
    ],
    correctAnswer: "A",
    explanation: "Để duy trì tính toàn vẹn ngữ pháp tối thượng, C++ quy định ngặt nghèo: Toán tử gán sao chép `operator=` (và toán tử gọi hàm `operator()`, toán tử chỉ mục `operator[]`, toán tử truy cập con trỏ `operator->`) bắt buộc phải là phương thức phi tĩnh bên trong Class, không được khai báo tự do ngoài Class.",
    difficulty: "Khó"
  },
  {
    id: "q188",
    category: Category.BASICS,
    questionText: "Khi biên dịch một chương trình C++ gồm nhiều tệp mã .cpp biệt lập, giai đoạn nào dán ghép các nhãn hàm, địa chỉ biến liên kết chúng thành một tập tin thực thi nhị phân duy nhất?",
    codeSnippet: `// Sơ đồ biên dịch: Header -> Source -> Object -> Execution`,
    options: [
      { key: "A", text: "Preprocessor (Tiền xử lý)" },
      { key: "B", text: "Compiler (Biên dịch mã máy)" },
      { key: "C", text: "Assembler (Hợp dịch)" },
      { key: "D", text: "Linker (Trình liên kết)" }
    ],
    correctAnswer: "D",
    explanation: "Các file `.cpp` được biên dịch độc lập ra các file đối tượng đối tượng `.obj`/`.o`. Giai đoạn tối hậu mang tên Linker (Trình liên kết) sẽ xâu chuỗi và ráp nối các đầu mối địa chỉ lời gọi hàm, biến toàn cục bị phân mảnh ở các file khác nhau lắp ghép thành file chạy hoàn chỉnh `.exe` hay tệp binary chính thống.",
    difficulty: "Trung bình"
  },
  {
    id: "q189",
    category: Category.BASICS,
    questionText: "Trong C++, từ khóa 'const' đặt trước định nghĩa một biến thuộc tính hoặc tham số truyền vào cam kết điều gì?",
    codeSnippet: `const double PI = 3.14159;`,
    options: [
      { key: "A", text: "Biến đó chỉ có hiệu lực trong hàm ảo." },
      { key: "B", text: "Cam kết biến đó là một hằng số bất tác động, mọi hành vi cố ý sửa đổi hoặc ghi đè giá trị lên biến đó đều lập tức bị trình biên dịch chặn lại và báo lỗi đỏ." },
      { key: "C", text: "Biến đó tự phân bổ trên vùng nhớ Heap động." },
      { key: "D", text: "Yêu cầu phải khai báo destructor cho biến." }
    ],
    correctAnswer: "B",
    explanation: "Tính chính xác hằng số (Const Correctness) là điểm tựa vàng của C++ an toàn. Khóa chặt các biến không nên bị chỉnh sửa bằng `const` giúp hệ thống loại bỏ các bẫy logic bóp méo dữ liệu trong tương lai.",
    difficulty: "Dễ"
  },
  {
    id: "q190",
    category: Category.BASICS,
    questionText: "Chạy mã nguồn dưới đây in ra kết quả cụ thể nào? Chú ý cơ chế khởi tạo và tăng biến của tĩnh static.",
    codeSnippet: `#include <iostream>
using namespace std;

void process() {
    static int num = 5; // Biến tĩnh trong hàm cục bộ
    num++;
    cout << num << " ";
}

int main() {
    process();
    process();
    return 0;
}`,
    options: [
      { key: "A", text: "In ra: 6 6 " },
      { key: "B", text: "In ra: 6 7 " },
      { key: "C", text: "Không biên dịch được vì biến static nằm trong hàm." },
      { key: "D", text: "In ra: 5 6 " }
    ],
    correctAnswer: "B",
    explanation: "Biến `static` cục bộ trong hàm chỉ được khởi tạo một duy nhất lần đầu tiên khi kiểm soát luồng quét qua. Ở lần gọi `process()` thứ nhất, `num` khởi tạo bằng 5, sau đó tăng lên 6 và in ra '6'. Ở lần gọi thứ hai, dòng khởi tạo `static int num = 5;` bị bỏ qua, `num` đang giữ nguyên giá trị 6 tiếp tục cộng thêm lên 7 và in ra '7'.",
    difficulty: "Trung bình"
  },
  {
    id: "q191",
    category: Category.BASICS,
    questionText: "Chỉ thị gán nhãn thư viện ngầm định từ C++11 'using NewName = OldType;' đóng vai trò thay thế tối ưu hơn cấu trúc nào?",
    codeSnippet: `using StringList = std::vector<std::string>;`,
    options: [
      { key: "A", text: "Từ khóa class." },
      { key: "B", text: "Cấu trúc định kiểu cũ 'typedef', vì cú pháp using trực quan hơn nhiều và đặc biệt hỗ trợ cực tốt cho việc định hình các con lai mẫu template (Template Aliasing)." },
      { key: "C", text: "Toán tử nạp chồng operator." },
      { key: "D", text: "Hàm hủy ảo." }
    ],
    correctAnswer: "B",
    explanation: "Cú pháp định danh kiểu mới `using` (Type Alias) được khuyên dùng ưu tiên tuyệt đối so với `typedef` của C cổ điển nhờ tính trực quan cao. Nó cũng mở ra chân trời mới hỗ trợ gán nhãn cho các Template tham số hóa linh hoạt.",
    difficulty: "Dễ"
  },
  {
    id: "q192",
    category: Category.ADVANCED,
    questionText: "Trong thư viện STL, cấu trúc dữ liệu 'std::list' thực chất được cài đặt ở hậu trường bằng cách tổ chức bộ nhớ dạng nào?",
    codeSnippet: `std::list<int> myList;`,
    options: [
      { key: "A", text: "Mảng tĩnh liên kết tuần tự giống vector." },
      { key: "B", text: "Cây tìm kiếm nhị phân đỏ đen cân bằng (Red-Black Tree)." },
      { key: "C", text: "Danh sách liên kết kép (Doubly Linked List), các phần tử phân mảnh tự do trên RAM, liên kết nhau bằng địa chỉ con trỏ." },
      { key: "D", text: "Ngăn xếp LIFO dùng chung vtable ảo." }
    ],
    correctAnswer: "C",
    explanation: "`std::list` biểu diễn cấu trúc danh sách liên kết kép. Khác biệt với `std::vector` cấp phát ô RAM liền kề bám sát, `list` cho phép chèn và xóa nút cực siêu tốc ở bất kỳ ngóc ngách nào trong chuỗi với chi phí O(1), đánh đổi lại là không hỗ trợ truy cập ngẫu nhiên qua chỉ mục index [].",
    difficulty: "Trung bình"
  },
  {
    id: "q193",
    category: Category.ADVANCED,
    questionText: "Cấu trúc Map lưu trữ ánh xạ cặp 'Key - Value' trong STL (std::map) mặc định sắp xếp các phần tử dựa theo cấu trúc dữ liệu lõi nào?",
    codeSnippet: `std::map<string, int> phonebook;`,
    options: [
      { key: "A", text: "Mảng động tự co giãn bộ nhớ." },
      { key: "B", text: "Bảng băm Hash Table tăng tốc tìm kiếm." },
      { key: "C", text: "Cây nhị phân đỏ đen tự cân bằng (Self-Balancing Red-Black Tree) sắp xếp các phần tử tuần tự dựa theo giá trị của Key." },
      { key: "D", text: "Danh sách liên kết đơn tuyến tính." }
    ],
    correctAnswer: "C",
    explanation: "`std::map` triển khai cấu trúc cây đỏ-đen (Red-Black Tree) cân bằng nghiêm ngặt giúp bảo đảm các thao tác chèn, xóa, tìm kiếm khóa đạt độ phức tạp tối ưu O(log N). Đồng thời, các khóa bên trong luôn tự động được sắp xếp theo thứ tự so sánh nhỏ hơn `<` mặc định.",
    difficulty: "Trung bình"
  },
  {
    id: "q194",
    category: Category.ADVANCED,
    questionText: "Đối với lớp chứa dữ liệu độc bản không trùng lặp chìa khóa 'std::set' trong C++, thao tác cố ý chèn thêm một phần tử đã tồn tại trước đó sẽ kết xuất thế nào?",
    codeSnippet: `std::set<int> mySet = {1, 2, 3};
mySet.insert(2); // Hành vi nạp trùng lặp trị`,
    options: [
      { key: "A", text: "Chương trình dấy ngoại lệ std::bad_alloc sập nguồn." },
      { key: "B", text: "Đối tượng cũ bị xóa hoàn toàn khỏi set." },
      { key: "C", text: "Phép chèn bị bỏ qua trong im lặng; Set giữ nguyên kích thước cũ và trả về cặp pair chứa iterator kèm kết quả boolean=false báo chèn thất bại." },
      { key: "D", text: "Sinh thêm một nút trùng lặp đứng cạch nhau." }
    ],
    correctAnswer: "C",
    explanation: "Đặc hữu của `std::set` là chỉ lưu trữ các giá trị độc nhất vô nhị (unique). Nếu nạp trùng, hàm `insert` thầm lặng bỏ qua phép gán để bảo vệ tính nhất quán, trả về cấu trúc báo cáo phép chèn không thành công chứ tuyệt đối không dấy lỗi crash.",
    difficulty: "Trung bình"
  },
  {
    id: "q195",
    category: Category.ADVANCED,
    questionText: "Trong C++11, từ khóa 'auto' thực hiện cơ chế suy luận kiểu dữ liệu động hay tĩnh lúc nào?",
    codeSnippet: `auto limit = 100; // auto suy luận kiểu gì?`,
    options: [
      { key: "A", text: "Suy luận kiểu tĩnh hoàn hảo NGAY tại thời điểm BIÊN DỊCH (Compile-time) dựa vào kiểu của biểu thức khởi tạo vế phải, chi phí hiệu năng lúc chạy runtime bằng không." },
      { key: "B", text: "Suy luận kiểu động lúc RUNTIME tương tự JavaScript, làm chậm tốc độ chạy máy." },
      { key: "C", text: "Tự động đổi kiểu dữ liệu liên tục theo ngữ cảnh." },
      { key: "D", text: "Giải phóng biến tự do ra khỏi tầm hoạt động của luồng." }
    ],
    correctAnswer: "A",
    explanation: "Không giống như suy luận kiểu động của Python hay JS, từ khóa `auto` trong C++ là một tính năng biên dịch tuyệt vời. Trình biên dịch sẽ tự soi giá trị khởi gán ở vế phải (ví dụ `100` là kiểu `int`) và thế chỗ từ khóa `auto` bằng kiểu thực tế (`int`) trước khi xuất mã máy. Do đó hiệu năng bảo toàn 100%.",
    difficulty: "Dễ"
  },
  {
    id: "q196",
    category: Category.INHERITANCE,
    questionText: "Sự cố dẫm đạp bộ nhớ nguy hiểm 'Object Slicing' có thể được loại trừ hoàn toàn nhờ biện pháp thiết kế nào?",
    codeSnippet: `// Tránh lỗi Object Slicing`,
    options: [
      { key: "A", text: "Chuyển thuộc tính Class sang kiểu static hằng." },
      { key: "B", text: "Luôn truyền tham số đối tượng vào các hàm thông qua cơ chế TRUYỀN THAM CHIẾU (Pass by Reference) hoặc truyền CON TRỎ (Pass by Pointer) trỏ tới lớp cơ sở." },
      { key: "C", text: "Xóa toàn bộ các hàm ảo thuần ảo của lớp cha." },
      { key: "D", text: "Đóng tất cả các quyền kế thừa public về private." }
    ],
    correctAnswer: "B",
    explanation: "Truyền tham chiếu (`Base&`) hoặc con trỏ (`Base*`) chỉ truyền địa chỉ vật lý của ô nhớ. Do đó, vùng nhớ của đối tượng lớp Con được giữ nguyên vẹn hình thù trong RAM, liên kết đa hình ảo qua vtable hoạt động mượt mà, loại trừ dứt điểm lỗi cắt lát thô bạo.",
    difficulty: "Trung bình"
  },
  {
    id: "q197",
    category: Category.ADVANCED,
    questionText: "Trong C++, từ khóa 'noexcept' đặt sau nguyên mẫu chữ ký phương thức mang hàm ý cam kết gì?",
    codeSnippet: `void doTask() noexcept; // noexcept mang nghĩa gì?`,
    options: [
      { key: "A", text: "Cam kết phương thức này không sử dụng bất kỳ cấu trúc Class nào." },
      { key: "B", text: "Cam kết chắc nịch với trình biên dịch rằng phương thức này tuyệt đối không bao giờ để lọt ra bất cứ ngoại lệ nào ra ngoài, cho phép compiler tạo ra mã máy tối ưu hóa cao độ về tốc độ và ngăn dọn dẹp unwinding lãng phí." },
      { key: "C", text: "Ép buộc hàm chỉ được ném ngoại lệ kiểu char*." },
      { key: "D", text: "Bắt phương thức phải chạy đa luồng đồng thời." }
    ],
    correctAnswer: "B",
    explanation: "Đánh dấu `noexcept` (C++11) giúp trình biên dịch biết rõ không bắt buộc phải sinh các khối mã bẫy dọn dẹp Stack lồng chuỗi phòng hờ rủi ro ngoại lệ, giúp giải phóng tối đa sức mạnh tốc độ thực thi hàm. Nếu hàm `noexcept` vô tình để lọt ngoại lệ, chương trình lập tức sập nguồn an toàn ngay.",
    difficulty: "Khó"
  },
  {
    id: "q198",
    category: Category.ADVANCED,
    questionText: "Toán tử chuyển đổi kiểu ép cứng 'reinterpret_cast' sở hữu năng lực đặc thù nào mạnh mẽ nhất nhưng cũng nguy hiểm nhất?",
    codeSnippet: `float f = 10.5f;
int* p = reinterpret_cast<int*>(&f); // Dòng lệnh này làm gì?`,
    options: [
      { key: "A", text: "Nó tự chuyển đổi float thành int chẵn qua phép làm tròn." },
      { key: "B", text: "Nó cho phép ép kiểu thô bạo bằng cách thông dịch lại nguyên vẹn chuỗi bit vật lý của vùng nhớ con trỏ nguồn sang một kiểu con trỏ hoàn toàn khác biệt mà không cần bất kỳ phép toán biến đổi bit vật lý nào." },
      { key: "C", text: "Nó tự động dọn dẹp con trỏ p khỏi bộ nhớ RAM." },
      { key: "D", text: "Nó chặn không cho phép kế thừa đa ảo." }
    ],
    correctAnswer: "B",
    explanation: "`reinterpret_cast` là mỏ neo chuyển đổi thô nhất trong C++. Nó ép CPU coi nguyên xi mảng bit ô nhớ cũ thuộc kiểu này biên dịch thành kiểu dữ liệu đích khác mà không thèm tính toán quy đổi. Nó cực kỳ hữu ích khi lập trình cấp thấp giao tiếp hệ điều hành hay phần cứng, đòi hỏi người viết code nắm cực chuẩn layout RAM.",
    difficulty: "Khó"
  },
  {
    id: "q199",
    category: Category.POLYMORPHISM,
    questionText: "Sự phân bổ vùng nhớ của một đối tượng lớp Con khi có cơ kế thừa đa hình (chứa 1 vptr ẩn) thay đổi thế nào về mặt dung lượng so với lớp thông thường?",
    codeSnippet: `class Demo { virtual void show(); };`,
    options: [
      { key: "A", text: "Không thay đổi gì về mặt số lượng byte RAM tiêu tốn." },
      { key: "B", text: "Tăng thêm dung lượng tương ứng đúng bằng kích thước của một biến con trỏ hệ thống (4 byte trên hệ máy 32-bit hoặc 8 byte trên hệ máy 64-bit) để lưu giữ địa chỉ con trỏ ẩn vptr trỏ tới bảng ảo vtable." },
      { key: "C", text: "Dung lượng nhân gấp ba lần để backup dữ liệu ảo." },
      { key: "D", text: "Do bộ nhớ Swap của hệ điều hành quyết định ngẫu nhiên." }
    ],
    correctAnswer: "B",
    explanation: "Bất kể lớp sở hữu bao nhiêu phương thức vẽ hàm ảo, đối tượng chỉ dắt theo duy nhất đúng 1 địa chỉ liên kết ẩn gọi là con trỏ `vptr`. Kích thước của đối tượng dôi thêm đúng bằng kích cỡ của 1 ô nhớ địa chỉ làm mốc liên kết bảng vtable.",
    difficulty: "Khó"
  },
  {
    id: "q200",
    category: Category.ADVANCED,
    questionText: "Cặp hàm 'std::move()' trong C++ thực chất thực hành kịch bản biến đổi gì trên đối tượng nguồn?",
    codeSnippet: `Widget w2 = std::move(w1); // std::move làm gì ở đây?`,
    options: [
      { key: "A", text: "Nó di chuyển trực tiếp vị trí tệp nhị phân trên ổ đĩa SSD sang luồng chạy." },
      { key: "B", text: "Nó giải phóng vùng nhớ w1 lập tức về 0." },
      { key: "C", text: "Nó không di chuyển dòng code vật lý nào, mà chỉ thuần túy thực hiện cú ép kiểu đối tượng nguồn thành tham chiếu RValue (MyClass&&) để tạo điều kiện kích hoạt an toàn Move Constructor của đối tượng đích." },
      { key: "D", text: "Nó chuyển biến thành con trỏ hằng static." }
    ],
    correctAnswer: "C",
    explanation: "Hiểu lầm tai hại: `std::move()` tự di chuyển vùng nhớ. Thực chất nó chỉ làm nhiệm vụ ép kiểu (cast) đối tượng đang tĩnh lvalue thành tham chiếu rvalue (`&&`). Nhờ sự chuyển giao sắc danh 'đối tượng tạm thời', Move Constructor ở vế thu nhận được quyền đoạt lấy các con trỏ tài nguyên của đối tượng cũ mượt mà, dọn rác đối tượng xuất phát an tâm.",
    difficulty: "Khó"
  }
];
