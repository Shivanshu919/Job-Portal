import Navbar from '../components_lite/Navbar';

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
         
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4"> Developer: Shivanshu Mishra</h2>
            <p className="text-gray-600 mb-2"><strong> "Welcome to the Job Portal, the bridge between ambitious job seekers and forward-thinking companies"</strong><strong></strong></p>
            <p className="text-gray-600 mb-2"><strong>We understand that finding the right job or the perfect candidate can be challenging</strong>.</p>
            <p className="text-gray-600 mb-2"><strong> Our mission is to democratize access to career opportunities. Whether you are a student looking for your first internship or a recruiter searching for top-tier talent, Job provides the tools you need to succeed. With real-time job tracking, secure profiles, and seamless application management, we are redefining how hiring happens</strong> .</p>
          </div>
        </div>
      </div>
      
      <hr className="w-full border-gray-300 my-6" />
      
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6"></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
         
        </div>
      </div>
    </div>
  )
}

export default Creator