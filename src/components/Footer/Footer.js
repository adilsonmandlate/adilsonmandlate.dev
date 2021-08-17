export const Footer = ({ ...props }) => {
  return (
    <footer className="w-full h-full grid md:grid-cols-3 max-w-7xl items-center pt-2 md:px-12 md:pt-0 border-t border-gray-700 dark:border-gray-800 border-opacity-5">
      <div className="flex justify-self-center md:justify-self-start">
        <a
          href="https://github.com/adilsonmandlate"
          rel="nofollow noopener noreferrer"
          className="text-gray-800 dark:text-gray-50 mr-10"
        >
          <span className="sr-only">Github</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>

        <a
          href="https://twitter.com/adilsonmandlate"
          rel="nofollow noopener noreferrer"
          className="text-gray-800 dark:text-gray-50 mr-10"
        >
          <span className="sr-only">Twitter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>

        <a
          href="mailto:me@adilsonmandlate.dev"
          className="text-gray-800 dark:text-gray-50"
        >
          <span className="sr-only">E-mail</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>

      <div className="dark:text-gray-50 text-gray-800 justify-self-center">
        <span className="sr-only">Adilson Mandlate</span>
        <svg
          width="173"
          height="12"
          viewBox="0 0 173 15"
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.672 12.728H2.4L6.312 1.76H4.8V0.487999H11.4V1.76H9.84L13.872 12.728H15.504V14H10.008V12.728H11.808L10.44 8.792H5.544L4.2 12.728H6V14H0.672V12.728ZM10.056 7.52L8.088 1.784H7.944L5.928 7.52H10.056ZM27.9553 12.728V14H24.6913V13.328C23.8113 13.952 22.8113 14.264 21.6913 14.264C20.8113 14.264 20.0033 14.064 19.2673 13.664C18.5313 13.264 17.9473 12.688 17.5153 11.936C17.0833 11.168 16.8673 10.28 16.8673 9.272C16.8673 8.248 17.0753 7.36 17.4913 6.608C17.9073 5.856 18.4673 5.288 19.1713 4.904C19.8753 4.52 20.6513 4.328 21.4993 4.328C22.0433 4.328 22.5953 4.416 23.1553 4.592C23.7153 4.752 24.2273 4.992 24.6913 5.312V1.496H23.0113V0.248H26.4673V12.728H27.9553ZM18.7153 9.416C18.7153 10.504 19.0273 11.36 19.6513 11.984C20.2913 12.608 21.0993 12.92 22.0753 12.92C22.9873 12.92 23.8593 12.632 24.6913 12.056V6.584C24.2433 6.296 23.7713 6.072 23.2753 5.912C22.7793 5.752 22.3073 5.672 21.8593 5.672C20.9153 5.672 20.1553 6 19.5793 6.656C19.0033 7.312 18.7153 8.232 18.7153 9.416ZM31.5 2.504C31.132 2.504 30.82 2.392 30.564 2.168C30.324 1.928 30.204 1.632 30.204 1.28C30.204 0.927999 30.324 0.639999 30.564 0.415999C30.82 0.175999 31.132 0.0559993 31.5 0.0559993C31.868 0.0559993 32.172 0.175999 32.412 0.415999C32.668 0.639999 32.796 0.927999 32.796 1.28C32.796 1.632 32.668 1.928 32.412 2.168C32.172 2.392 31.868 2.504 31.5 2.504ZM29.028 12.728H30.852V5.84H29.052V4.568H32.604V12.728H34.308V14H29.028V12.728ZM35.5464 12.728H37.2984V1.496H35.5944V0.248H39.0744V12.728H40.6104V14H35.5464V12.728ZM47.3488 8.528C48.0848 8.704 48.6688 8.896 49.1008 9.104C49.5488 9.296 49.9088 9.584 50.1808 9.968C50.4528 10.352 50.5888 10.864 50.5888 11.504C50.5888 12.4 50.2368 13.08 49.5328 13.544C48.8288 14.008 47.9808 14.24 46.9888 14.24C46.3808 14.24 45.8048 14.144 45.2608 13.952C44.7168 13.76 44.2848 13.504 43.9648 13.184V14H42.5728V10.736H43.8208L43.9168 11.768C44.1888 12.168 44.5808 12.48 45.0928 12.704C45.6208 12.912 46.1728 13.016 46.7488 13.016C47.3728 13.016 47.8848 12.896 48.2848 12.656C48.6848 12.4 48.8848 12.064 48.8848 11.648C48.8848 11.168 48.7328 10.824 48.4288 10.616C48.1248 10.408 47.5568 10.216 46.7248 10.04L45.4048 9.752C44.4288 9.512 43.7088 9.2 43.2448 8.816C42.7808 8.416 42.5488 7.8 42.5488 6.968C42.5488 6.152 42.8688 5.512 43.5088 5.048C44.1648 4.568 45.0048 4.328 46.0288 4.328C46.5248 4.328 47.0288 4.408 47.5408 4.568C48.0688 4.728 48.4848 4.952 48.7888 5.24V4.52H50.2048V7.76H48.9568L48.7888 6.584C48.5488 6.296 48.1888 6.064 47.7088 5.888C47.2448 5.696 46.7808 5.6 46.3168 5.6C45.7568 5.6 45.2848 5.712 44.9008 5.936C44.5168 6.16 44.3248 6.488 44.3248 6.92C44.3248 7.272 44.4608 7.544 44.7328 7.736C45.0048 7.928 45.4688 8.104 46.1248 8.264L47.3488 8.528ZM49.0528 7.064L49.0288 7.016L49.0528 7.064ZM43.6288 11.168C43.6288 11.2 43.6368 11.224 43.6528 11.24L43.6288 11.168ZM57.1802 14.288C56.1722 14.288 55.2842 14.08 54.5162 13.664C53.7482 13.248 53.1482 12.664 52.7162 11.912C52.3002 11.144 52.0922 10.264 52.0922 9.272C52.0922 8.28 52.3002 7.408 52.7162 6.656C53.1482 5.904 53.7482 5.328 54.5162 4.928C55.2842 4.512 56.1722 4.304 57.1802 4.304C58.1882 4.304 59.0762 4.512 59.8442 4.928C60.6282 5.328 61.2362 5.904 61.6682 6.656C62.1002 7.408 62.3162 8.272 62.3162 9.248C62.3162 10.24 62.1002 11.12 61.6682 11.888C61.2362 12.656 60.6282 13.248 59.8442 13.664C59.0762 14.08 58.1882 14.288 57.1802 14.288ZM57.1802 12.896C58.1722 12.896 58.9722 12.568 59.5802 11.912C60.1882 11.24 60.4922 10.352 60.4922 9.248C60.4922 8.176 60.1882 7.32 59.5802 6.68C58.9722 6.024 58.1722 5.696 57.1802 5.696C56.1882 5.696 55.3962 6.024 54.8042 6.68C54.2122 7.336 53.9162 8.2 53.9162 9.272C53.9162 10.36 54.2122 11.24 54.8042 11.912C55.4122 12.568 56.2042 12.896 57.1802 12.896ZM75.2663 12.728V14H70.2023V12.728H71.7623V7.808C71.7623 7.152 71.6023 6.64 71.2823 6.272C70.9623 5.904 70.5223 5.72 69.9622 5.72C69.4983 5.72 69.0263 5.808 68.5463 5.984C68.0823 6.144 67.5703 6.392 67.0103 6.728V12.728H68.7143V14H63.4343V12.728H65.2583V5.84H63.4343V4.568H67.0103V5.504C68.2583 4.72 69.3943 4.328 70.4183 4.328C71.3143 4.328 72.0503 4.608 72.6263 5.168C73.2183 5.712 73.5143 6.48 73.5143 7.472V12.728H75.2663ZM83.5772 12.728H85.4012V1.76H83.5772V0.487999H88.1612L92.5772 9.968L96.7772 0.487999H101.433V1.76H99.6092V12.728H101.433V14H95.9852V12.728H97.7372V2.096L92.6492 13.304H92.0252L86.8652 2.096V12.728H88.6172V14H83.5772V12.728ZM112.982 12.728V14H109.934L109.838 13.16C109.326 13.544 108.814 13.824 108.302 14C107.79 14.176 107.214 14.264 106.574 14.264C105.614 14.264 104.83 14 104.222 13.472C103.63 12.928 103.334 12.256 103.334 11.456C103.334 10.432 103.678 9.688 104.366 9.224C105.07 8.744 105.99 8.504 107.126 8.504C107.942 8.504 108.814 8.608 109.742 8.816V7.832C109.742 7.112 109.542 6.568 109.142 6.2C108.758 5.832 108.214 5.648 107.51 5.648C107.046 5.648 106.51 5.728 105.902 5.888C105.31 6.032 104.766 6.24 104.27 6.512L103.742 5.36C104.27 5.024 104.878 4.768 105.566 4.592C106.27 4.416 106.926 4.328 107.534 4.328C108.766 4.328 109.734 4.632 110.438 5.24C111.142 5.832 111.494 6.64 111.494 7.664V12.728H112.982ZM105.014 11.36C105.014 11.856 105.174 12.264 105.494 12.584C105.83 12.888 106.278 13.04 106.838 13.04C107.782 13.04 108.75 12.696 109.742 12.008V9.848C108.894 9.656 108.062 9.56 107.246 9.56C106.606 9.56 106.07 9.704 105.638 9.992C105.222 10.264 105.014 10.72 105.014 11.36ZM125.704 12.728V14H120.64V12.728H122.2V7.808C122.2 7.152 122.04 6.64 121.72 6.272C121.4 5.904 120.96 5.72 120.4 5.72C119.936 5.72 119.464 5.808 118.984 5.984C118.52 6.144 118.008 6.392 117.448 6.728V12.728H119.152V14H113.872V12.728H115.696V5.84H113.872V4.568H117.448V5.504C118.696 4.72 119.832 4.328 120.856 4.328C121.752 4.328 122.488 4.608 123.064 5.168C123.656 5.712 123.952 6.48 123.952 7.472V12.728H125.704ZM137.502 12.728V14H134.238V13.328C133.358 13.952 132.358 14.264 131.238 14.264C130.358 14.264 129.55 14.064 128.814 13.664C128.078 13.264 127.494 12.688 127.062 11.936C126.63 11.168 126.414 10.28 126.414 9.272C126.414 8.248 126.622 7.36 127.038 6.608C127.454 5.856 128.014 5.288 128.718 4.904C129.422 4.52 130.198 4.328 131.046 4.328C131.59 4.328 132.142 4.416 132.702 4.592C133.262 4.752 133.774 4.992 134.238 5.312V1.496H132.558V0.248H136.014V12.728H137.502ZM128.262 9.416C128.262 10.504 128.574 11.36 129.198 11.984C129.838 12.608 130.646 12.92 131.622 12.92C132.534 12.92 133.406 12.632 134.238 12.056V6.584C133.79 6.296 133.318 6.072 132.822 5.912C132.326 5.752 131.854 5.672 131.406 5.672C130.462 5.672 129.702 6 129.126 6.656C128.55 7.312 128.262 8.232 128.262 9.416ZM138.695 12.728H140.447V1.496H138.743V0.248H142.223V12.728H143.759V14H138.695V12.728ZM154.865 12.728V14H151.817L151.721 13.16C151.209 13.544 150.697 13.824 150.185 14C149.673 14.176 149.097 14.264 148.457 14.264C147.497 14.264 146.713 14 146.105 13.472C145.513 12.928 145.217 12.256 145.217 11.456C145.217 10.432 145.561 9.688 146.249 9.224C146.953 8.744 147.873 8.504 149.009 8.504C149.825 8.504 150.697 8.608 151.625 8.816V7.832C151.625 7.112 151.425 6.568 151.025 6.2C150.641 5.832 150.097 5.648 149.393 5.648C148.929 5.648 148.393 5.728 147.785 5.888C147.193 6.032 146.649 6.24 146.153 6.512L145.625 5.36C146.153 5.024 146.761 4.768 147.449 4.592C148.153 4.416 148.809 4.328 149.417 4.328C150.649 4.328 151.617 4.632 152.321 5.24C153.025 5.832 153.377 6.64 153.377 7.664V12.728H154.865ZM146.897 11.36C146.897 11.856 147.057 12.264 147.377 12.584C147.713 12.888 148.161 13.04 148.721 13.04C149.665 13.04 150.633 12.696 151.625 12.008V9.848C150.777 9.656 149.945 9.56 149.129 9.56C148.489 9.56 147.953 9.704 147.521 9.992C147.105 10.264 146.897 10.72 146.897 11.36ZM160.003 14C158.179 14 157.267 13.072 157.267 11.216V5.84H155.707V4.568H157.267V1.352L159.043 0.655999V4.568H161.539V5.84H159.043V11.12C159.043 11.712 159.139 12.128 159.331 12.368C159.523 12.608 159.851 12.728 160.315 12.728H161.755V14H160.003ZM172.669 9.656H164.893C165.005 10.664 165.365 11.464 165.973 12.056C166.581 12.632 167.357 12.92 168.301 12.92C169.613 12.92 170.805 12.416 171.877 11.408L172.501 12.488C172.037 13.032 171.453 13.472 170.749 13.808C170.045 14.128 169.253 14.288 168.373 14.288C167.381 14.288 166.477 14.08 165.661 13.664C164.845 13.248 164.205 12.664 163.741 11.912C163.277 11.144 163.045 10.272 163.045 9.296C163.045 8.304 163.261 7.432 163.693 6.68C164.141 5.912 164.741 5.328 165.493 4.928C166.261 4.512 167.109 4.304 168.037 4.304C169.477 4.304 170.605 4.744 171.421 5.624C172.253 6.504 172.669 7.696 172.669 9.2V9.656ZM170.917 8.552C170.917 7.64 170.645 6.92 170.101 6.392C169.573 5.864 168.885 5.6 168.037 5.6C167.205 5.6 166.501 5.864 165.925 6.392C165.349 6.92 165.005 7.64 164.893 8.552H170.917Z" />
        </svg>
      </div>

      <div className="text-sm justify-self-center md:justify-self-end">
        @ {new Date().getFullYear()}
      </div>
    </footer>
  );
};
