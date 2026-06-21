/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Question } from "../types";

export const BATCH9_QUESTIONS: Question[] = [
  {
    id: "q201",
    category: Category.BASICS,
    questionText:
      "Theo khái niệm cơ bản về lập trình hướng đối tượng (OOP), phát biểu nào sau đây miêu tả chính xác nhất cốt lõi của OOP?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Phương pháp lập trình chia nhỏ bài toán thành các hàm tự do độc lập.",
      },
      {
        key: "B",
        text: "Phương pháp lập trình dựa trên việc mô hình hóa các đối tượng thực tế thành các đối tượng tương ứng trong phần mềm.",
      },
      {
        key: "C",
        text: "Cơ chế quản lý luồng chương trình bám sát các sự kiện tuyến tính tuần tự.",
      },
      {
        key: "D",
        text: "Quá trình biên dịch mã nguồn trực tiếp sang mã nhị phân không sử dụng bộ nhớ heap.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Định nghĩa chính xác trong slide bài giảng về OOP: 'Lập trình hướng đối tượng là phương pháp lập trình dựa trên việc mô hình hóa các đối tượng thực tế thành các đối tượng trong phần mềm'. Nó liên kết dữ liệu và hành vi đi liền với nhau thành một đơn vị duy nhất.",
    difficulty: "Dễ",
  },
  {
    id: "q202",
    category: Category.BASICS,
    questionText:
      "Trong các lợi ích của việc sử dụng Class và Object được trình bày trong giáo trình, phát biểu nào định nghĩa đúng về 'Tính mô-đun' (modularity)?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Khả năng phân chia phần mềm thành các module nhỏ, mỗi module biểu diễn đối tượng cụ thể có thể được thiết kế, lập trình và kiểm thử độc lập.",
      },
      {
        key: "B",
        text: "Khả năng thay đổi một class mà dứt khoát không gây ảnh hưởng hay làm thay đổi mã của bất kỳ đối tượng nào đã tạo ra.",
      },
      {
        key: "C",
        text: "Kỹ thuật tối ưu hóa mã nguồn để giảm thiểu kích thước tệp thực thi .exe cuối cùng.",
      },
      {
        key: "D",
        text: "Quy trình ép buộc tất cả các thuộc tính của lớp phải được gán giá trị static tĩnh.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Lợi ích của Class & Object bao gồm: 'Tính mô-đun: Chia nhỏ vấn đề thành các đối tượng cụ thể giúp quản lý dễ dàng hơn. Phần mềm được chia thành các module nhỏ, mỗi module có thể được phát triển và kiểm thử độc lập.' điều này giảm thiểu rủi ro lỗi lan truyền.",
    difficulty: "Dễ",
  },
  {
    id: "q203",
    category: Category.BASICS,
    questionText:
      "Dựa vào tài liệu giới thiệu về các ngôn ngữ lập trình hỗ trợ OOP, ngôn ngữ C++ được đánh giá tối ưu vượt trội và có sức mạnh riêng biệt trong lĩnh vực nào?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Phát triển các ứng dụng di động Android thuần túy và ứng dụng web nhẹ.",
      },
      {
        key: "B",
        text: "Là ngôn ngữ dễ học, phổ biến toàn cầu cho khoa học dữ liệu và AI.",
      },
      {
        key: "C",
        text: "Phát triển hệ thống ở cấp độ phần cứng và các ứng dụng đòi hỏi hiệu năng cực cao.",
      },
      {
        key: "D",
        text: "Phát triển các hệ điều hành đám mây phân tán không hỗ trợ kiểu dữ liệu số thực.",
      },
    ],
    correctAnswer: "C",
    explanation:
      "Slide bài giảng chỉ rõ: 'C++: Ngôn ngữ mạnh mẽ cho phát triển hệ thống và ứng dụng hiệu năng cao', trong khi Java thế mạnh là doanh nghiệp và di động, Python là dễ học, khoa học dữ liệu, AI.",
    difficulty: "Dễ",
  },
  {
    id: "q204",
    category: Category.BASICS,
    questionText:
      "Theo quy chuẩn lập trình được hướng dẫn trong bài giảng, quy tắc Camel Case được khuyến nghị sử dụng rộng rãi nhằm mục đích gì?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Tối ưu hóa dung lượng lưu trữ của mã nguồn trên ổ đĩa.",
      },
      {
        key: "B",
        text: "Đặt tên biến, tên lớp và tên các phương thức giúp tăng tính dễ đọc, dễ hiểu và chuẩn hóa mã nguồn.",
      },
      {
        key: "C",
        text: "Thông báo cho trình biên dịch biết đây là đoạn chương trình C chứ không phải C++.",
      },
      {
        key: "D",
        text: "Ngăn chặn các lỗi phân bổ con trỏ lơ lửng tại runtime.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Quy tắc Camel Case giúp viết tên biến, class, phương thức trở nên tường minh, tăng độ duy trì dễ đọc, thiết lập tính nhất quán cao trong toàn bộ source code dự án phát triển.",
    difficulty: "Dễ",
  },
  {
    id: "q205",
    category: Category.BASICS,
    questionText:
      "Theo tài liệu bài giảng của TS. Huỳnh Xuân Phụng, quy tắc đặt tên 'Upper Camel Case' (hay còn gọi là Pascal Case) đặc trưng bởi việc viết hoa chữ cái đầu tiên của mỗi từ và được quy định dùng cho thực thể nào?",
    codeSnippet: `// Ví dụ: class CameraSystem { ... }`,
    options: [
      { key: "A", text: "Dùng để đặt tên cho các phương thức hoạt động." },
      { key: "B", text: "Dùng để đặt tên cho các biến cục bộ trong hàm." },
      { key: "C", text: "Dùng để đặt tên cho Class (Lớp)." },
      { key: "D", text: "Dùng để đặt tên thư mục chứa mã nguồn." },
    ],
    correctAnswer: "C",
    explanation:
      "Giáo trình quy định rõ: 'Upper Camel Case (Pascal Case): Viết hoa chữ cái đầu tiên của mỗi từ. Dùng cho tên class' (ví dụ Class CameraSystem). Điều này giúp phân biệt rạch ròi lớp (kiểu dữ liệu) với các biến cụ thể.",
    difficulty: "Dễ",
  },
  {
    id: "q206",
    category: Category.BASICS,
    questionText:
      "Quy tắc 'Lower Camel Case' được đặc trưng bởi việc viết thường chữ cái đầu tiên của từ đầu tiên và viết hoa chữ cái đầu của các từ tiếp theo. Theo slide, quy tắc này được khuyên dùng cho thực thể nào?",
    codeSnippet: `// Ví dụ: int checkPoints; void captureImage();`,
    options: [
      { key: "A", text: "Dùng cho tên biến và phương thức." },
      { key: "B", text: "Chỉ dùng duy nhất cho việc khai báo tên class." },
      { key: "C", text: "Dùng cho hằng số tiền xử lý #define." },
      {
        key: "D",
        text: "Dùng để đặt tên các file thư viện tiêu chuẩn đầu .h.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Bài giảng quy định rõ: 'Lower Camel Case: Viết thường chữ cái đầu tiên, viết hoa chữ cái đầu của các từ tiếp theo. Dùng cho tên biến và phương thức' (ví dụ: biến cameraSystem, phương thức captureImage()).",
    difficulty: "Dễ",
  },
  {
    id: "q207",
    category: Category.BASICS,
    questionText:
      "Dựa trên bài tập ví dụ về Camel Case ở slide chương 2, cụm từ thông thường 'capture image' khi chuyển đổi chuẩn chỉnh sang 'Upper Camel Case' và 'Lower Camel Case' sẽ cho kết quả lần lượt là gì?",
    codeSnippet: "",
    options: [
      { key: "A", text: "captureImage và CaptureImage" },
      { key: "B", text: "CaptureImage và captureImage" },
      { key: "C", text: "Captureimage và captureimage" },
      { key: "D", text: "CAPTURE_IMAGE và capture_image" },
    ],
    correctAnswer: "B",
    explanation:
      "Đúng theo slide quy đổi: cụm thông thường 'capture image' -> Upper Camel Case (tên class) là 'CaptureImage' (viết hoa tất cả các từ đầu) và Lower Camel Case (tên biến/hàm) là 'captureImage' (từ đầu viết thường, từ sau viết hoa chữ I).",
    difficulty: "Dễ",
  },
  {
    id: "q208",
    category: Category.BASICS,
    questionText:
      "Trong bài giảng về lớp và đối tượng, thuật ngữ 'Object' (Đối tượng) được định nghĩa chính xác và có quan hệ như thế nào với 'Class'?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Object là bản thiết kế trừu tượng dùng để tạo ra các Class cụ thể.",
      },
      {
        key: "B",
        text: "Object là một thể hiện (instance) cụ thể của một Class, mang dữ liệu giá trị cụ thể của các thuộc tính.",
      },
      {
        key: "C",
        text: "Object là một giải thuật giải toán học nằm ngoài tầm kiểm soát của trình biên dịch C++.",
      },
      {
        key: "D",
        text: "Object là tập hợp gồm tất cả các con trỏ tĩnh của lớp được gộp chung lại.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Object là một thể hiện cụ thể (instance) đại diện cho thực thể thực tế được sinh ra từ khuôn mẫu Class, chứa giá trị thực thụ (state) tương ứng thuộc tính định nghĩa bởi Class.",
    difficulty: "Dễ",
  },
  {
    id: "q209",
    category: Category.BASICS,
    questionText:
      "Phát biểu nào sau đây định nghĩa chính xác nhất về khái niệm 'Class' (Lớp) trong lập trình OOP C++?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Là một biến vùng nhớ động lưu trữ trong phân vùng Stack.",
      },
      {
        key: "B",
        text: "Là một hàm độc lập toàn cục có thể gọi ở bất kỳ vị trí nào mà không cần khai báo kiểu dữ liệu.",
      },
      {
        key: "C",
        text: "Là một bản thiết kế hoặc khuôn mẫu để tạo ra các đối tượng, định nghĩa các thuộc tính (dữ liệu) và phương thức (hành vi) chung.",
      },
      {
        key: "D",
        text: "Là cơ chế liên kết động các chương trình ứng dụng để chạy đa luồng đồng thời.",
      },
    ],
    correctAnswer: "C",
    explanation:
      "Đúng theo tài liệu: 'Class: Là một bản thiết kế hoặc khuôn mẫu để tạo ra các đối tượng. Định nghĩa các thuộc tính (dữ liệu) và phương thức (hành vi) mà các đối tượng sẽ có.'",
    difficulty: "Dễ",
  },
  {
    id: "q210",
    category: Category.BASICS,
    questionText:
      "Trong ví dụ xây dựng hệ thống quản lý các loại camera (Slide 13-16/PDF 2, Slide 23-26/PDF 3), một lớp Camera đại diện cho yêu cầu thực tế này sẽ thiết lập cấu trúc thuộc tính và phương thức như thế nào?",
    codeSnippet: `class Camera {
public:
    string brand;
    int resolution;
    void capture() {
        cout << resolution << endl;
    }
};`,
    options: [
      {
        key: "A",
        text: "Thuộc tính: brand và resolution. Phương thức: capture().",
      },
      {
        key: "B",
        text: "Thuộc tính: capture(). Phương thức: brand và resolution.",
      },
      {
        key: "C",
        text: "Chỉ chứa thuộc tính tĩnh brand, không cho phép khai báo hàm capture().",
      },
      { key: "D", text: "Chứa ba thuộc tính: brand, resolution và capture." },
    ],
    correctAnswer: "A",
    explanation:
      "Theo đúng bước phân tích và khai báo mã nguồn thực tế của camera: 'Lớp Camera: Chứa các thuộc tính như thương hiệu (brand) và độ phân giải (resolution). Phương thức capture(): Thực hiện chức năng chụp ảnh'.",
    difficulty: "Trung bình",
  },
  {
    id: "q211",
    category: Category.OPERATORS,
    questionText:
      "Con trỏ mặc định luôn hiện hành bên trong một lớp trong C++ để mô tả chính đối tượng lớp đang được định nghĩa có tên gọi là gì?",
    codeSnippet: "",
    options: [
      { key: "A", text: "con trỏ 'super'" },
      { key: "B", text: "con trỏ 'this'" },
      { key: "C", text: "con trỏ 'self'" },
      { key: "D", text: "con trỏ 'base'" },
    ],
    correctAnswer: "B",
    explanation:
      "Đúng theo slide mô tả: 'Mỗi một lớp trong nó luôn có một con trỏ mặc định là con trỏ 'this', con trỏ để mô tả chính đối tượng lớp đang định nghĩa.' Java và C# sử dụng 'this' làm từ khóa tham chiếu, Python dùng 'self'.",
    difficulty: "Dễ",
  },
  {
    id: "q212",
    category: Category.OPERATORS,
    questionText:
      "Đối với các hàm thành viên phi tĩnh của một lớp C++, điểm đặc biệt nào xảy ra với danh sách đối số truyền vào ở mức biên dịch?",
    codeSnippet: `class PhanSo {
public:
    int ts, ms;
    void nhap(); // Trình biên dịch hiểu hàm này thế nào?
};`,
    options: [
      {
        key: "A",
        text: "Hàm thành phần không nhận bất kỳ tham số nào và bị cấm truy cập dữ liệu private.",
      },
      {
        key: "B",
        text: "Trình biên dịch tự động chèn thêm một tham số đầu tiên bí mật chính là con trỏ 'this'.",
      },
      { key: "C", text: "Mọi biến cục bộ đều biến thành biến tĩnh toàn cục." },
      {
        key: "D",
        text: "Hàm thành phần bắt buộc phải có đối số đầu tiên kiểu số nguyên int.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Giáo trình ghi rõ: 'Các hàm thành phần của lớp luôn có tham số đầu tiên là con trỏ this.' Khi biên dịch, `void nhap()` thực tế được biểu diễn dưới dạng `void nhap(PhanSo *this)`. Điều này cho phép hàm biết chính xác cần thao tác thuộc tính của đối tượng nào.",
    difficulty: "Khó",
  },
  {
    id: "q213",
    category: Category.OPERATORS,
    questionText:
      "Cú pháp chuẩn xác nào được trình bày trong slide bài giảng để minh họa việc truy cập tường minh đến các thành phần của đối tượng thông qua con trỏ 'this'?",
    codeSnippet: `void PS::nhap() {
    cout << "Tu: ";
    // Điền đoạn code truy cập qua con trỏ this
}`,
    options: [
      { key: "A", text: "cin >> this.ts;" },
      { key: "B", text: "cin >> this::ts;" },
      { key: "C", text: "cin >> this->ts;" },
      { key: "D", text: "cin >> *this.ts;" },
    ],
    correctAnswer: "C",
    explanation:
      "Vì `this` là một con trỏ kiểu lớp, cú pháp truy cập đến thành viên của lớp thông qua một pointer bắt buộc phải dùng toán tử mũi tên `->`. Do đó cú pháp đúng là `this->ts` hoặc `this->ms` như slide 8 phân tích.",
    difficulty: "Trung bình",
  },
  {
    id: "q214",
    category: Category.CONSTRUCTORS,
    questionText:
      "Phát biểu nào sau đây miêu tả không đúng về tính chất của Hàm tạo (Constructor) trong C++?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Constructor bắt buộc phải được khai báo trong phân vùng 'public' của lớp.",
      },
      {
        key: "B",
        text: "Tên của constructor phải trùng hoàn toàn với tên của lớp đang định nghĩa.",
      },
      {
        key: "C",
        text: "Constructor tự động được gọi thực hiện khi ta tiến hành khai báo khởi tạo đối tượng.",
      },
      {
        key: "D",
        text: "Constructor được phép khai báo có kiểu trả về là 'void' nếu không cần trả về dữ liệu.",
      },
    ],
    correctAnswer: "D",
    explanation:
      "Trong slide 'Tính chất của Constructor', nêu rõ: 'Constructor không có kiểu trả về' (kể cả void cũng không được ghi). Thuộc tính khác như trong các tùy chọn A, B, C đều là những đặc tính hoàn toàn đúng của hàm tạo.",
    difficulty: "Trung bình",
  },
  {
    id: "q215",
    category: Category.CONSTRUCTORS,
    questionText:
      "Nếu không khai báo bất kỳ kiểu trả về nào, vậy một lớp trong C++ có thể có tối đa bao nhiêu hàm constructor?",
    codeSnippet: "",
    options: [
      { key: "A", text: "Chỉ duy nhất một hàm constructor." },
      {
        key: "B",
        text: "Một lớp có thể có nhiều hàm constructor khác nhau nhờ vào tính chất nạp chồng (overloading) danh sách tham số.",
      },
      {
        key: "C",
        text: "Có tối đa hai hàm: một không tham số và một có tham số.",
      },
      { key: "D", text: "Bắt buộc phải có đúng ba hàm constructor." },
    ],
    correctAnswer: "B",
    explanation:
      "Đúng theo slide chỉ ra: 'Một lớp có thể có nhiều hàm constructor' nhờ nạp chồng hàm tạo (Constructor overloading), cho phép người dùng khởi tạo đối tượng theo nhiều cách khác nhau.",
    difficulty: "Dễ",
  },
  {
    id: "q216",
    category: Category.CONSTRUCTORS,
    questionText:
      "Phát biểu nào sau đây là chính xác khi nói về tính kế thừa của Hàm tạo (Constructor) đối với lớp dẫn xuất (lớp con)?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Constructor được kế thừa trọn vẹn và tự động chạy đè lên tất cả hàm ở lớp dẫn xuất.",
      },
      {
        key: "B",
        text: "Constructor không thể kế thừa, nhưng lớp dẫn xuất (lớp con) vẫn có thể gọi constructor của lớp cơ sở (lớp cha) để khởi tạo tài nguyên cơ sở.",
      },
      {
        key: "C",
        text: "C++ nghiêm cấm lớp dẫn xuất tương tác hoặc gọi constructor của lớp cơ sở.",
      },
      {
        key: "D",
        text: "Mọi lớp con đều chia sẻ trực tiếp chung một file vtable ảo của constructor cha.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Đúng theo slide ghi nhận: 'Không thể kế thừa, nhưng lớp dẫn xuất vẫn có thể gọi constructor của lớp cơ sở.' Điều này đảm bảo lớp cơ sở được khởi tạo đúng đắn trước khi khởi tạo phần bổ sung của lớp dẫn xuất.",
    difficulty: "Trung bình",
  },
  {
    id: "q217",
    category: Category.CONSTRUCTORS,
    questionText:
      "Constructor mặc định (Default Constructor) được phân loại như thế nào theo giáo trình?",
    codeSnippet: `class Sophuc {
public:
    Sophuc(); // Đây thuộc loại hàm tạo nào?
};`,
    options: [
      { key: "A", text: "Là constructor bắt buộc nhận đối số là hằng số." },
      {
        key: "B",
        text: "Là constructor không chứa bất kỳ tham số đầu vào nào, cho phép khởi tạo đối tượng chỉ cần gọi tên đặt biến.",
      },
      {
        key: "C",
        text: "Là constructor được tự động inline trực tiếp vào bảng ảo vtable.",
      },
      {
        key: "D",
        text: "Là constructor do hệ điều hành nạp sẵn khi khởi động RAM.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Theo định nghĩa phân loại constructor: 'Constructor mặc định : Constructor không có tham số => tạo đối tượng chỉ cần đặt tên'. Ví dụ: 'sophuc a,b,c;'",
    difficulty: "Dễ",
  },
  {
    id: "q218",
    category: Category.CONSTRUCTORS,
    questionText:
      "Constructor sao chép (Copy Constructor) được định nghĩa là gì và hoạt động theo nguyên lý nào?",
    codeSnippet: `PS d(2, 3);
PS u(d); // Hành vi biến 'u' ở đây hoạt động ra sao?`,
    options: [
      {
        key: "A",
        text: "Là constructor tham chiếu chéo trung gian làm tăng bộ đếm số lượng đối tượng đang chạy.",
      },
      {
        key: "B",
        text: "Là constructor cho phép tạo ra một đối tượng mới hoàn toàn từ một đối tượng đã có nhưng độc lập tách biệt với đối tượng cũ.",
      },
      {
        key: "C",
        text: "Là constructor trung gian liên kết địa chỉ tĩnh để các đối tượng dùng chung RAM.",
      },
      {
        key: "D",
        text: "Hàm sinh ra cấu trúc LIFO dọn dẹp các biến liên đới rác rưởi.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Theo đúng định nghĩa slide: 'Constructor sao chép: Là Constructor cho phép tạo ra một đối tượng mới từ một đối tượng đã có nhưng hoàn toàn độc lập với đối tượng đã có đó.' Ví dụ: `PS d(2,3); PS u(d);`.",
    difficulty: "Trung bình",
  },
  {
    id: "q219",
    category: Category.CONSTRUCTORS,
    questionText:
      "Cú pháp chung chính xác khai báo và định nghĩa Constructor sao chép (Copy Constructor) trong C++ có dạng nào sau đây?",
    codeSnippet: "",
    options: [
      { key: "A", text: "Tên_lớp ( const Tên_lớp *đối_tượng )" },
      { key: "B", text: "Tên_lớp ( const Tên_lớp &đối_tượng )" },
      { key: "C", text: "void Tên_lớp ( Tên_lớp đối_tượng )" },
      { key: "D", text: "friend Tên_lớp ( const Tên_lớp &đối_tượng )" },
    ],
    correctAnswer: "B",
    explanation:
      "Cú pháp chuẩn của copy constructor bắt buộc phải nhận vào một hằng tham chiếu đại diện cho đối tượng nguồn để tránh hiện tượng đệ quy vô hạn khi truyền tham trị: `Tên_lớp ( const Tên_lớp &đối_tượng )`.",
    difficulty: "Khó",
  },
  {
    id: "q220",
    category: Category.CONSTRUCTORS,
    questionText:
      "Khi nào việc sử dụng Constructor sao chép mặc định của trình biên dịch có thể gây ra thảm họa về quản lý an toàn bộ nhớ?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Khi lớp chỉ chứa toàn các thuộc tính kiểu dữ liệu cơ bản như int, double, float.",
      },
      {
        key: "B",
        text: "Khi lớp có các thuộc tính kiểu con trỏ hoặc kiểu tham chiếu.",
      },
      {
        key: "C",
        text: "Khi lớp được kế thừa từ một lớp trừu tượng ảo thuần túy.",
      },
      { key: "D", text: "Khi lớp có khai báo một phương thức tĩnh static." },
    ],
    correctAnswer: "B",
    explanation:
      "Slide ghi chú rõ: 'Khi lớp không có thuộc tính kiểu con trỏ hoặc tham chiếu thì ta chỉ dùng hàm tạo sao chép mặc định.' Nhưng 'Khi lớp có các thuộc tính con trỏ hoặc tham chiếu thì phải định nghĩa hàm tạo sao chép mới.' Nếu không, hệ thống sẽ thực hiện sao chép nông (shallow copy), làm hai đối tượng khác nhau trỏ chung một địa chỉ nhớ động, dẫn đến lỗi crash tranh chấp giải phóng bộ nhớ (double free).",
    difficulty: "Khó",
  },
  {
    id: "q221",
    category: Category.CONSTRUCTORS,
    questionText:
      "Hàm hủy (Destructor) trong lập trình OOP C++ gánh vác vai trò cốt lõi nào sau đây?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Khai báo khởi sự lại các giá trị thuộc tính ban đầu cho đối tượng.",
      },
      {
        key: "B",
        text: "Thực hiện giải phóng bộ nhớ đã cấp phát tương ứng cho đối tượng khi không cần sử dụng đối tượng đó nữa.",
      },
      {
        key: "C",
        text: "Giải nén các lớp nhị phân để chuẩn bị biên dịch chéo.",
      },
      {
        key: "D",
        text: "Sao chép toàn bộ thuộc tính con trỏ sang phân vùng nhớ Stack tạm thời.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Giáo trình định nghĩa cụ thể: 'Hàm hủy-Destructor: Là phương thức(method) thực hiện giải phóng bộ nhớ đã cấp cho đối tượng khi không cần sử dụng đối tượng.' Tránh hiện tượng rò rỉ bộ nhớ (memory leak).",
    difficulty: "Dễ",
  },
  {
    id: "q222",
    category: Category.CONSTRUCTORS,
    questionText:
      "Về số lượng khai báo, một Class được định nghĩa trong C++ có thể sở hữu tối đa bao nhiêu hàm hủy (Destructor)?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Có bao nhiêu hàm tạo constructor thì sẽ có bấy nhiêu hàm hủy destructor tương xứng.",
      },
      {
        key: "B",
        text: "Vô số, tùy thuộc vào số lượng con trỏ động lớp đang giữ.",
      },
      { key: "C", text: "Mỗi lớp chỉ có duy nhất một Destructor." },
      {
        key: "D",
        text: "Có tối đa hai destructor (một tĩnh static và một ảo virtual).",
      },
    ],
    correctAnswer: "C",
    explanation:
      "Slide bài giảng viết rõ ràng: 'Mỗi lớp chỉ có duy nhất một Destructor'. Bởi vì trình hủy không có cơ chế nạp chồng tham số (chúng không nhận bất kỳ tham số nào cả), nên dứt khoát chỉ có duy nhất một hàm hủy.",
    difficulty: "Dễ",
  },
  {
    id: "q223",
    category: Category.CONSTRUCTORS,
    questionText:
      "Về mặt cú pháp và kiểu dữ liệu, các hàm Destructor trong C++ tuân thủ quy tắc nghiêm ngặt nào sau đây?",
    codeSnippet: `class Sophuc {
    // Khai báo Destructor cho lớp này
};`,
    options: [
      {
        key: "A",
        text: "Là phương thức rỗng có tham số truyền vào là con trỏ 'this'.",
      },
      {
        key: "B",
        text: "Là phương thức rỗng không có tham số và là hàm thành phần có cùng tên lớp và thêm tiếp đầu ngữ dấu ngã '~'.",
      },
      { key: "C", text: "Có kiểu trả về bắt buộc là bool hoặc void*." },
      { key: "D", text: "Khai báo có từ khóa friend ở trước." },
    ],
    correctAnswer: "B",
    explanation:
      "Cú pháp định vị hàm hủy: 'Destructor là method rỗng không có tham số và là hàm thành phần của lớp có cùng tên lớp và thêm tiếp đầu ngữ “~”'. Ví dụ: `~sophuc();`.",
    difficulty: "Trung bình",
  },
  {
    id: "q224",
    category: Category.CONSTRUCTORS,
    questionText:
      "Điều gì sẽ xảy ra nếu một đối tượng được cấp phát động bằng toán tử 'new' trong C++ đi ra khỏi tầm vực (scope) của hàm nhưng không được gọi hủy?",
    codeSnippet: `void test() {
    Sophuc* p = new Sophuc();
    // kết thúc hàm mà không delete p
}`,
    options: [
      {
        key: "A",
        text: "Đối tượng tự động bị Destructor dọn dẹp nhờ cơ chế Garbage Collector của C++.",
      },
      {
        key: "B",
        text: "Chương trình sẽ tự động crash ngay lập tức tại dòng thoát hàm.",
      },
      {
        key: "C",
        text: "Xảy ra hiện tượng rò rỉ bộ nhớ (memory leak) vì đối tượng vùng Heap không tự động giải phóng khi con trỏ dọn khỏi Stack.",
      },
      { key: "D", text: "Mọi đối tượng động tự dồn sang phân cấp lớp cha." },
    ],
    correctAnswer: "C",
    explanation:
      "Đối tượng cấp phát động trên vùng nhớ Heap bằng toán tử `new` sẽ tồn tại mãi mãi cho tới khi chúng ta tường minh thực hiện giải phóng bằng toán tử `delete`. Nếu ra ngoài hàm mà không `delete p`, ta sẽ mất dấu vết con trỏ và đối tượng vẫn chiếm RAM bừa bãi, gây rò rỉ dữ liệu hệ thống.",
    difficulty: "Trung bình",
  },
  {
    id: "q225",
    category: Category.CONSTRUCTORS,
    questionText:
      "Hãy phân tích đoạn mã nguồn dưới đây về sao chép Phân số và cho biết lỗi gì xảy ra do cơ chế sao chép ngầm định (ngầm định Copy Constructor) trong C++?",
    codeSnippet: `class Buffer {
    int* data;
public:
    Buffer(int s) { data = new int[s]; }
    ~Buffer() { delete[] data; }
};
void run() {
    Buffer b1(10);
    Buffer b2 = b1; // sao chép mặc định
}`,
    options: [
      {
        key: "A",
        text: "Lỗi biên dịch do toán tử gán không được hỗ trợ mặc định.",
      },
      {
        key: "B",
        text: "Lỗi vùng nhớ khi giải phóng đối tượng (double free), do b1 và b2 cùng trỏ sang một mảng động chung, khi Destructor chạy lần hai sẽ cố huỷ vùng nhớ đã bị xóa.",
      },
      {
        key: "C",
        text: "Bộ nhớ dồn tích tự động chuyển đổi sang lớp static tĩnh.",
      },
      {
        key: "D",
        text: "Không có lỗi gì xảy ra, dữ liệu được nhân đôi tự động bằng deep copy mượt mà.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Khi không khai báo sao chép sâu chuyên biệt, Copy Constructor mặc định thực hiện phép toán sao chép cơ học theo từng bít (shallow copy). Thuộc tính ptr `data` của b2 nhận y nguyên địa chỉ của b1. Lúc kết thúc hàm `run()`, b2 hủy trước giải phóng `data`, b1 hủy sau tiếp tục kích hoạt giải phóng `data` (một địa chỉ đã được delete), dẫn đến lỗi double free thảm họa nghiêm trọng lập trình.",
    difficulty: "Khó",
  },
];
