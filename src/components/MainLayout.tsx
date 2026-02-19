import { MainContent } from './MainContent'
import { Sidebar } from './Sidebar'
export function MainLayout() {
  return (
    <section className='main-section'>
      <div className="container">
        <div className='layout'>
          <main className='main'>
            <MainContent />
          </main>
          <aside className='sidebar'>
            <Sidebar />
          </aside>
        </div>
      </div>
    </section>
    
  );
}