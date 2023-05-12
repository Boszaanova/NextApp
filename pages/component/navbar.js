import Link from "next/link";

export default function Navbar() {
    return (
        <>
        <header class="p-3 text-bg-light">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <h3 className="text-dark me-3">CARSOME</h3>
          
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fw-bolder">
          <li><a href="#" class="nav-link px-2 text-dark">ซื้อรถยนต์</a></li>
          <li><a href="#" class="nav-link px-2 text-dark">ขายรถยนต์</a></li>
          <li><a href="#" class="nav-link px-2 text-dark">คำถามที่พบบ่อย</a></li>
          <li><a href="#" class="nav-link px-2 text-dark">เกี่ยวกับคาร์ซัม</a></li>
          <li><a href="#" class="nav-link px-2 text-dark">อื่นๆ</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-dark me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
        </>
    )
}