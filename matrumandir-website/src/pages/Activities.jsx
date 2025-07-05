import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import activitiesBgImg from '../assets/carousel1.png'
import yogaImg from '../assets/yoga.png'
import shootingImg from '../assets/shooting.png'
import tennisImg from '../assets/tennis.png'

function Activities() {
  return (
    <>
      <Banner
        title="मातृमंदिर विश्वस्त संस्था"
        subtitle="Coordinator"
        primaryBtn={{ label: "View Activities", link: "/activities" }}
        secondaryBtn={{ label: "Join Us", link: "/contact" }}
        backgroundImage={activitiesBgImg}
      />
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-wrap flex-col">
            <div className="w-full">
              <div className="pb-24 text-center">
                <h2 className="text-2xl md:text-5xl font-bold mb-8">
                  Our Activities
                </h2>
                <p className="w-5/6 mx-auto">
                  A multifarious institution working in the fields of Education, Research, Rural Development, Women Power, Youth Organisation, National Integration and Health, with a view to Motivation Building and Attitude Formation of every person in all age groups to Change the Face of India for Better.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full md:w-11/12 mx-auto md:flex md:flex-wrap">
                <div className="flex flex-wrap -mx-4">
                  <div className="flex flex-col md:flex-row mb-24">
                    <div className="md:w-3/5 px-4">
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#ff680B]">Guru Purnima</h3>
                      <div className='text-gray-700 space-y-2.5'>
                        <p>
                          <strong>Guru Purnima</strong> is the foundation day of the organization. On this day, individuals who have contributed selflessly are honored with various awards. The aim is to present such individuals as role models to society and the younger generation.
                        </p>
                        <p>
                          This year, the program was held on <strong>28th July 2022</strong>.
                        </p>
                        <p>
                          During the event, the <strong>Guru Bhushan Award</strong> was presented to <strong>Pandit Ramdas Phule</strong>. The <strong>Adhyapakottam Award</strong> was given to <strong>Shri Kiran Joshi</strong>, who is the principal of Panchkoshiashram Gurukul in Amalner.
                        </p>
                        <p>
                          The <strong>Samajbhushan Award</strong> was presented to <strong>Shrimati Mai Bhide</strong>, a senior social worker.
                        </p>
                        <p>
                          On this occasion, <strong>Pramukh Vachak Savitatai Kulkarni</strong> of Jnana Prabodhini Nigdi was also felicitated with a special honor.
                        </p>
                        <p>
                          The chief guest of the program, senior worker <strong>Mr. Ramabhau Dimbale</strong>, was present. In his presidential speech, Mr. Ramabhau stated that <strong>Guru Purnima</strong> is a day to express gratitude towards those who have shaped our lives. He emphasized the importance of nurturing our positive qualities and using them for the greater good with commitment and dedication.
                        </p>
                        <p>
                          The program was skillfully conducted by <strong>Mr. Aditya Shinde</strong>, a trustee of the organization, who also managed all the arrangements.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-2/5 px-4 mt-8 md:mt-0">
                      <img alt="Guru Purnima" className="w-full h-auto rounded shadow-lg object-cover" src={yogaImg} />
                    </div>
                  </div>
                  <div className='w-full pb-24 border-t-2 border-[#ff680B]'></div>
                  <div className="flex flex-col md:flex-row mb-24">
                    <div className="md:w-2/5 px-4 mt-8 md:mt-0 mb-8 md:mb-0">
                      <img alt="Guru Purnima" className="w-full h-auto rounded shadow-lg object-cover" src={shootingImg} />
                    </div>
                    <div className="md:w-3/5 px-4">
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#ff680B]">State-Level Student-Principal Essay Competition</h3>
                      <div className='text-gray-700 space-y-2.5'>
                        <p>
                          The Matrumandir Trust organized the prize distribution ceremony for the 14th State-Level Essay Competition on <strong>September 27, 2022.</strong>
                        </p>
                        <p>
                          This year, students and teachers from <strong>30 schools</strong> across <strong>4 districts</strong> participated, totaling <strong>345 students</strong> and <strong>27 principals</strong>. The event’s chief guest was <strong>Dr. Milind Wate</strong>, who praised the award-winning students for their excellent work.
                        </p>
                        <p>
                          In the program, the organization's <strong>President Mr. Nitinbhai Kariya</strong> felicitated Dr. Milind Wate with the <strong>Taponishta Vibhuti Award</strong>. Dr. Wate, who has worked in the field of education for over 40 years, delivered an inspiring speech, stating that if research doesn’t bring any positive change or value to society, then its relevance must be questioned.
                        </p>
                        <p>
                          <strong>Other awardees included:</strong>
                          <ul className='list-disc list-inside'>
                            <li>Mr. Rushikumar Vyas, who received the Sant Jnaneshwar Award.</li>
                            <li>Mr. Pramod Jadhav, who received the Jnan Prabodhini Nigdi Award.</li>
                          </ul>
                        </p>
                        <p>
                          Both awards were presented by <strong>Mr. Nitinbhai Vedia</strong> to <strong>Rushikumar Vyas</strong> and <strong>Mr. Pramod Jadhav</strong>, respectively.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='w-full pb-24 border-t-2 border-[#ff680B]'></div>
                  <div className="flex flex-col md:flex-row mb-24">
                    <div className="md:w-3/5 px-4">
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#ff680B]">Sant Wadamaya Award</h3>
                      <div className='text-gray-700 space-y-2.5'>
                        <p>
                          The <strong>Matrumandir Trust</strong> organizes the <strong>prestigious Sant Wadamaya Awards</strong> every year. This year marked the <strong>24th edition</strong> of the initiative.
                        </p>
                        <p>
                          For the evaluation process, <strong>36 books</strong> were submitted by various participants. The evaluation was carried out by two examiners: Anjanatai Date and Vasantatai Date.
                        </p>
                        <p>
                          <strong>Mrs. Sudhir Kulkarni</strong> of the Matrumandir Trust handled the entire process.
                        </p>
                        <p>
                          The <strong>award distribution ceremony</strong> was held on <strong>November 21, 2022</strong>. Renowned literary scholar <strong>Dr. Sadanand More</strong> was present as the chief guest. He highly appreciated the efforts of the trust and commended the event.
                        </p>
                        <h4 className='pt-6 uppercase'><strong>First Prize Winning Books</strong></h4>
                        <p>
                          <strong>Category No. 1 – Biography, Journalism</strong>
                          <i className='block'>(The award is distributed as 60% to the writer and 40% to the publisher.)</i>
                        </p>
                        <ul>
                          <li>First Prize:</li>
                          <ul>
                            <li>
                              <strong>Book Title:</strong> <i>Jave Santatilya Gava</i>
                            </li>
                            <li>
                              <strong>Author:</strong> <i>Dr. Leela Govilkar, Savedi, Ahmednagar</i>
                            </li>
                            <li>
                              <strong>Publisher:</strong> <i>Anandprakashan, Navi Mumbai</i>
                            </li>
                          </ul>
                        </ul>
                        <p>
                          <strong>Category No. 2 – Character, Introduction, Conceptual, Literary</strong>
                        </p>
                        <ul>
                          <li>First Prize (Shared):</li>
                          <ul>
                            <li>
                              <strong>Book Title:</strong> <i>Sahitya Mangalshaleetil Chamkata Tara</i>
                            </li>
                            <li>
                              <strong>Author:</strong> <i>Smt. Sumangala Vijay Bavne, Pune</i>
                            </li>
                            <li>
                              <strong>Publisher:</strong> <i>Santosh Aakash</i>
                            </li>
                            <li>
                              <strong>Book Title:</strong> <i>Sant Janabai – A Literary Star in the Sky of Bhakti Literature</i>
                            </li>
                            <li>
                              <strong>Author:</strong> <i>Smt. Manjushri Gaikwad, Kolhapur</i>
                            </li>
                            <li>
                              <strong>Publisher:</strong> <i>Smarak Media Pvt. Ltd., Pune</i>
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-2/5 px-4 mt-8 md:mt-0">
                      <img alt="Guru Purnima" className="w-full h-auto rounded shadow-lg object-cover" src={yogaImg} />
                    </div>
                  </div>
                  <div className='w-full pb-24 border-t-2 border-[#ff680B]'></div>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 px-4 mt-8 md:mt-0 mb-8 md:mb-0">
                      <img alt="Guru Purnima" className="w-full h-auto rounded shadow-lg object-cover" src={shootingImg} />
                    </div>
                    <div className="md:w-3/5 px-4">
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#ff680B]">Group Singing and Other Competitions</h3>
                      <div className='text-gray-700 space-y-2.5'>
                        <p>
                          After a two-year gap due to the pandemic, these competitions resumed in their 28th year. This year, the competitions received an enthusiastic response. From 20 districts, approximately <strong>10 schools and 15,000 students</strong> participated in various competitions.
                        </p>
                        <p>
                          <strong>Competitions were conducted smoothly under the supervision of:</strong>
                          <ul className='list-disc list-inside'>
                            <li>Mr. Anantrao Shisode</li>
                            <li>Mrs. Shilpa Kapshikar, who managed various competition categories</li>
                            <li>Mr. Prashant Pore and Mrs. Swati Pore, who also contributed significantly as chief judges</li>
                            <li>Mr. Nitin Sawant, on 5th February, oversaw the competition results and the award ceremony</li>
                          </ul>
                        </p>
                        <p>
                          The final event was successfully organized in <strong>Savitribai Phule School</strong>, which is a free and open learning center.
                        </p>
                        <p>
                          <strong>Dr. Meenal Kulkarni</strong>, the chief guest, along with <strong>Mr. Sudhir Kulkarni</strong>, participated and graced the event.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Activities