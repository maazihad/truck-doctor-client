const Footer = () => {
  return (
    <footer className='bg-blue-600 text-white'>
      <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex flex-col items-center md:items-start'>
            <h2 className='text-lg font-bold'>Brand</h2>
            <p className='mt-2'>© 2024 Brand. All rights reserved.</p>
          </div>
          <div className='flex mt-4 md:mt-0 space-x-6'>
            <a href='#' className='hover:text-blue-400'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-blue-400'>
              Terms of Service
            </a>
            <a href='#' className='hover:text-blue-400'>
              Contact
            </a>
          </div>
        </div>
        <div className='mt-6 flex justify-center space-x-6'>
          <a href='#' className='hover:text-blue-400'>
            <span className='sr-only'>Facebook</span>
            <svg
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.482v-9.293H9.691v-3.622h3.116v-2.672c0-3.1 1.893-4.785 4.657-4.785 1.325 0 2.464.099 2.797.143v3.244l-1.918.001c-1.504 0-1.794.714-1.794 1.762v2.309h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.405 24 22.676V1.325C24 .595 23.405 0 22.675 0z' />
            </svg>
          </a>
          <a href='#' className='hover:text-blue-400'>
            <span className='sr-only'>Twitter</span>
            <svg
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.573 2.163-2.724-.949.555-2.003.959-3.127 1.184-.897-.957-2.178-1.554-3.594-1.554-2.717 0-4.92 2.203-4.92 4.92 0 .386.045.762.127 1.124-4.087-.205-7.719-2.165-10.141-5.144-.424.729-.666 1.573-.666 2.475 0 1.708.87 3.213 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.316 0-.623-.03-.924-.086.624 1.951 2.435 3.374 4.58 3.414-1.68 1.319-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.633.962-.694 1.797-1.562 2.457-2.549z' />
            </svg>
          </a>
          <a href='#' className='hover:text-blue-400'>
            <span className='sr-only'>Instagram</span>
            <svg
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.328 3.608 1.304.975.975 1.242 2.242 1.304 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.328 2.633-1.304 3.608-.975.975-2.242 1.242-3.608 1.304-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.328-3.608-1.304-.975-.975-1.242-2.242-1.304-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.328-2.633 1.304-3.608.975-.975 2.242-1.242 3.608-1.304 1.266-.058 1.645-.07 4.85-.07m0-2.163C8.755 0 8.332.002 7.052.07 5.746.138 4.387.315 3.221 1.481 2.055 2.647 1.878 4.006 1.81 5.312.742 8.332.742 15.668 1.81 18.688c.068 1.306.245 2.665 1.411 3.831 1.166 1.166 2.525 1.343 3.831 1.411 3.02 1.068 10.356 1.068 13.376 0 1.306-.068 2.665-.245 3.831-1.411 1.166-1.166 1.343-2.525 1.411-3.831 1.068-3.02 1.068-10.356 0-13.376-.068-1.306-.245-2.665-1.411-3.831C20.712.245 19.353.068 18.047 0 15.027-.068 8.333-.068 5.312 0 4.006.068 2.647.245 1.481 1.411 1.068 2.052.068 2.667 0 4.047 0 7.973.002 8.395.07 12 0 15.605.068 16.027 1.481 18.589c1.06 1.457 2.78 2.663 5.378 2.663 1.93 0 2.452.008 3.608-.07 1.084-.062 2.058-.316 2.836-1.096.779-.779 1.034-1.752 1.096-2.836.078-1.156.07-1.678.07-3.608 0-1.598 0-3.248-.07-4.868-.07-1.784-.33-2.963-.935-3.568-.605-.605-1.784-.865-3.568-.935-1.62-.07-3.27-.07-4.868-.07zm0 5.834c-2.268 0-4.107 1.838-4.107 4.107s1.838 4.107 4.107 4.107 4.107-1.838 4.107-4.107-1.838-4.107-4.107-4.107zm0 6.78c-1.478 0-2.673-1.195-2.673-2.673S10.522 9.33 12 9.33s2.673 1.195 2.673 2.673-1.195 2.673-2.673 2.673zm4.833-7.863a1.007 1.007 0 100 2.014 1.007 1.007 0 000-2.014z' />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
