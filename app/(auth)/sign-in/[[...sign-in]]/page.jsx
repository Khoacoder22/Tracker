import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* ==========================================
          CỘT TRÁI: KHU VỰC HÌNH ẢNH (Lấy từ Unsplash)
          ========================================== */}
      <div className="relative hidden md:block">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Michelangelo%27s_David_with_pedestal.jpg/250px-Michelangelo%27s_David_with_pedestal.jpg" 
          alt="Hình nền đăng nhập" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Lớp phủ gradient từ xanh thẫm mờ dần lên trên */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
        
        {/* Chữ hiển thị đè lên ảnh */}
        <div className="absolute bottom-10 left-10 right-10 text-white">
          <h1 className="text-4xl font-bold mb-4 font-cursive">Expense Tracker</h1>
          <p className="text-lg opacity-80">Quản lý tài chính cá nhân của bạn một cách thông minh và hiệu quả nhất.</p>
        </div>
      </div>

      {/* ==========================================
          CỘT PHẢI: FORM ĐĂNG NHẬP (CLERK)
          ========================================== */}
      <div className="flex items-center justify-center p-8 bg-white">
        <SignIn 
          appearance={{
            elements: {
              // Tùy biến nút bấm chính của Clerk
              formButtonPrimary: 
                "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl",
              // Xóa bỏ viền và bóng đổ mặc định của thẻ (card) Clerk để nó chìm vào nền trắng cho đẹp hơn
              card: "shadow-none border-0", 
            },
          }}
        />
      </div>
    </div>
  )
}