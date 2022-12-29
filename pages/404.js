import Link from "next/link";
import React from "react";

const NoPage = () => {
  return (
    <section className="not_found">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="404">
              <svg
                width="549"
                height="209"
                viewBox="0 0 549 209"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M333.967 114.784C340.453 86.8751 323.08 58.9939 295.164 52.5095C267.248 46.0252 239.36 63.3932 232.874 91.3021C226.388 119.211 243.761 147.092 271.677 153.577C299.593 160.061 327.481 142.693 333.967 114.784Z"
                  stroke="#FF014F"
                  strokeWidth="5.50025"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M269.654 89.3977L301.061 120.797"
                  stroke="#FF014F"
                  strokeWidth="5.50025"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M269.654 120.797L301.061 89.3977"
                  stroke="#FF014F"
                  strokeWidth="5.50025"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.30356 86.3206L3.10508 114.629C2.68994 116.532 3.52022 118.565 5.32394 119.609C6.05401 120.024 6.88429 120.196 7.72889 120.196H92.2028C93.6344 120.196 94.7939 121.355 94.7939 122.787V190.924"
                  stroke="#FF014F"
                  strokeWidth="5.50025"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M232.219 187.446H157.852C145.956 187.446 136.308 177.8 136.308 165.908V48.9102C136.308 46.377 134.261 44.3305 131.727 44.3305H99.3459C98.1291 44.3305 96.9695 44.817 96.1106 45.6757C95.2517 46.5344 94.7793 47.708 94.7793 48.9388L94.9368 81.7982C94.9368 83.2294 93.7772 84.4029 92.3457 84.4029H56.8297C55.1835 84.4029 53.9667 82.9145 54.2959 81.2973C57.0015 68.102 67.4945 16.9667 68.9547 9.91105C69.1265 9.09529 69.1265 8.2509 68.8545 7.44945C68.196 5.47445 66.4066 4.24365 64.4597 4.24365H30.9335C28.7863 4.24365 26.9253 5.74637 26.4529 7.85018"
                  stroke="#FF014F"
                  strokeWidth="5.50025"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M187.669 128.812C194.326 153.485 210.302 174.366 231.56 187.461"
                  stroke="#FF014F"
                  strokeWidth="5.50025"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M254.98 8.0791C214.124 20.3155 184.263 58.2556 184.263 103.037"
                  stroke="#FF014F"
                  strokeWidth="5.50025"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M335.231 187.475C363.575 170.015 382.529 138.701 382.529 103.037C382.529 48.395 338.037 2.69804 283.396 3.92884"
                  stroke="#FF014F"
                  strokeWidth="5.50025"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M425.103 187.447H366.983"
                  stroke="#FF014F"
                  strokeWidth="5.50025"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M423.728 68.7458L413.693 114.629C413.278 116.532 414.108 118.565 415.912 119.609C416.628 120.024 417.472 120.196 418.317 120.196H503.693C504.408 120.196 504.995 120.783 504.995 121.498V178.731C504.995 183.554 501.087 187.461 496.263 187.461H454.577"
                  stroke="#FF014F"
                  strokeWidth="5.50025"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M543.632 132.347V48.9102C543.632 46.377 541.585 44.3304 539.051 44.3304H509.533C508.316 44.3304 507.157 44.817 506.298 45.6757C505.439 46.5344 504.966 47.708 504.966 48.9388L505.124 81.7982C505.124 83.2294 503.964 84.4029 502.533 84.4029H467.017C465.371 84.4029 464.154 82.9145 464.483 81.2973C467.189 68.102 477.682 16.9667 479.142 9.91105C479.313 9.09529 479.314 8.2509 479.042 7.44945C478.383 5.47445 476.594 4.24365 474.647 4.24365H441.507C439.345 4.24365 437.484 5.74637 437.026 7.85018L430.756 36.4877"
                  stroke="#FF014F"
                  strokeWidth="5.50025"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M543.633 202.917V176.212"
                  stroke="#FF014F"
                  strokeWidth="5.50025"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M287.792 0C342.447 0 386.925 44.4518 386.925 99.1078C386.925 100.196 386.925 101.269 386.867 102.342C386.867 102.457 386.867 102.586 386.867 102.714C386.867 103.502 386.81 104.289 386.753 105.061C386.753 105.448 386.71 105.834 386.681 106.221C386.638 106.793 386.595 107.38 386.538 107.952C386.509 108.382 386.466 108.797 386.424 109.226C386.309 110.428 386.166 111.631 385.98 112.818C385.894 113.491 385.794 114.164 385.693 114.822C385.636 115.208 385.565 115.595 385.507 115.967C385.379 116.683 385.25 117.384 385.107 118.085C384.849 119.445 384.563 120.79 384.233 122.121C384.019 123.051 383.775 123.967 383.532 124.883C383.303 125.756 383.059 126.615 382.787 127.473C382.458 128.618 382.1 129.735 381.714 130.851C381.585 131.252 381.442 131.652 381.299 132.053C381.098 132.626 380.898 133.184 380.683 133.742C380.626 133.899 380.569 134.042 380.511 134.186C380.168 135.102 379.824 135.989 379.452 136.876C379.108 137.692 378.765 138.508 378.407 139.309C377.863 140.54 377.29 141.742 376.689 142.944C376.288 143.774 375.873 144.59 375.429 145.406C374.943 146.322 374.442 147.238 373.926 148.139C372.853 150.014 371.708 151.86 370.505 153.664C369.99 154.465 369.446 155.252 368.902 156.025C368.343 156.812 367.785 157.599 367.213 158.358C367.155 158.429 367.112 158.487 367.069 158.544C366.44 159.374 365.81 160.19 365.151 161.006C364.507 161.807 363.848 162.608 363.176 163.396C362.503 164.168 361.83 164.941 361.143 165.7C361.143 165.7 361.143 165.714 361.114 165.728C360.427 166.487 359.726 167.231 359.01 167.975L358.981 168.004C357.536 169.478 356.061 170.923 354.529 172.312L354.415 172.426C353.685 173.085 352.955 173.729 352.21 174.373C350.636 175.718 349.018 177.02 347.357 178.265C345.697 179.51 344.008 180.713 342.275 181.858C341.402 182.43 340.529 182.988 339.641 183.532H339.67C324.568 192.835 306.802 198.216 287.806 198.216C268.81 198.216 251.045 192.835 235.942 183.532H235.971C235.083 182.988 234.21 182.43 233.337 181.858C231.605 180.713 229.916 179.51 228.255 178.265C226.594 177.02 224.977 175.718 223.402 174.373C222.658 173.729 221.928 173.085 221.198 172.426L221.083 172.312C219.551 170.923 218.077 169.478 216.631 168.004L216.602 167.975C215.887 167.231 215.185 166.487 214.498 165.728C214.498 165.714 214.498 165.7 214.469 165.7C213.782 164.941 213.109 164.168 212.437 163.396C211.764 162.608 211.105 161.807 210.461 161.006C209.803 160.19 209.173 159.374 208.543 158.544C208.5 158.487 208.457 158.429 208.4 158.358C207.827 157.599 207.269 156.812 206.711 156.025C206.167 155.252 205.623 154.465 205.107 153.664C203.905 151.86 202.76 150.014 201.686 148.139C201.171 147.238 200.67 146.322 200.183 145.406C199.739 144.59 199.324 143.774 198.923 142.944C198.322 141.742 197.749 140.54 197.205 139.309C196.847 138.508 196.504 137.692 196.16 136.876C195.788 135.989 195.445 135.102 195.101 134.186C195.044 134.042 194.986 133.899 194.929 133.742C194.714 133.184 194.514 132.626 194.314 132.053C194.17 131.652 194.027 131.252 193.898 130.851C193.512 129.735 193.154 128.618 192.825 127.473C192.553 126.615 192.31 125.756 192.08 124.883C191.837 123.967 191.594 123.051 191.379 122.121C191.05 120.79 190.763 119.445 190.506 118.085C190.363 117.384 190.234 116.683 190.105 115.967C190.048 115.595 189.976 115.208 189.919 114.822C189.819 114.164 189.718 113.491 189.633 112.818C189.446 111.631 189.303 110.428 189.189 109.226C189.146 108.797 189.103 108.382 189.074 107.952C189.017 107.38 188.974 106.793 188.931 106.221C188.902 105.834 188.874 105.448 188.86 105.061C188.802 104.289 188.759 103.502 188.745 102.714C188.745 102.586 188.745 102.457 188.745 102.342C188.702 101.269 188.688 100.196 188.688 99.1078C188.688 44.4518 233.165 0 287.82 0H287.792ZM339.684 99.1078C339.684 70.499 316.408 47.2283 287.792 47.2283C259.176 47.2283 235.899 70.499 235.899 99.1078C235.899 127.717 259.176 150.987 287.792 150.987C316.408 150.987 339.684 127.702 339.684 99.1078Z"
                  fill="white"
                  fill-opacity="0.8"
                />
                <path
                  d="M509.634 117.913C509.319 116.854 508.331 116.081 507.171 116.081H422.726C421.896 116.081 421.051 115.91 420.335 115.494C418.532 114.45 417.701 112.432 418.117 110.528L441.436 3.94988C441.894 1.86038 443.755 0.357666 445.902 0.357666H479.629C481.562 0.357666 483.351 1.57415 483.995 3.53484C484.253 4.32198 484.253 5.16636 484.095 5.98213C482.649 12.9948 472.242 63.7294 469.537 76.8818C469.207 78.499 470.439 80.0017 472.085 80.0017H507.329C508.76 80.0017 509.92 78.8282 509.92 77.397L509.762 45.1959C509.762 43.9794 510.235 42.8059 511.094 41.9472C511.953 41.0885 513.127 40.6019 514.343 40.6019H544.033C546.567 40.6019 548.614 42.6484 548.614 45.1816V203.425C548.614 206.259 546.309 208.563 543.475 208.563H514.758C511.924 208.563 509.619 206.259 509.619 203.425V168.29C509.705 167.603 509.748 166.902 509.748 166.186V118.686C509.748 118.414 509.705 118.156 509.619 117.913H509.634Z"
                  fill="white"
                  fill-opacity="0.8"
                />
                <path
                  d="M140.889 161.993V203.425C140.889 206.259 138.584 208.563 135.75 208.563H104.299C101.465 208.563 99.1602 206.259 99.1602 203.425V118.672C99.1602 117.241 98.0007 116.081 96.5692 116.081H12.1382C11.3079 116.081 10.4633 115.91 9.74752 115.494C7.9438 114.45 7.11352 112.432 7.52866 110.528L30.8481 3.94988C31.3062 1.86038 33.1672 0.357666 35.3145 0.357666H69.041C70.9736 0.357666 72.763 1.57415 73.4072 3.53484C73.6649 4.32198 73.6649 5.16636 73.5074 5.98213C72.0616 12.9948 61.6544 63.7294 58.9488 76.8818C58.6196 78.499 59.8507 80.0017 61.4826 80.0017H96.741C98.1725 80.0017 99.332 78.8282 99.332 77.397L99.1745 45.1959C99.1745 43.9794 99.6469 42.8059 100.506 41.9472C101.365 41.0885 102.539 40.6019 103.755 40.6019H136.308C138.842 40.6019 140.889 42.6484 140.889 45.1816V161.993Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
            <h2>Oops!</h2>
            <p>Something Went Wrong</p>
            <Link role="button" href="/">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoPage;