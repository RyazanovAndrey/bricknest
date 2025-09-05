import Title from '../components/Title'
import aboutList from '../db.json'
import AboutCard from '../components/AboutCard'
import AccordionItem from '../components/AccordionItem'

const AboutPage = () => {

  const listItem = [
    { id: 1, title: 'Title 1', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsum quam saepe assumenda nemo neque laborum totam perspiciatis eveniet quibusdam?' },
    { id: 2, title: 'Title 2', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsum quam saepe assumenda nemo neque laborum totam perspiciatis eveniet quibusdam?' },
  ]

  return (
    <>
      <section className="relative bg-[url(/image/section-banner-1.jpg)] min-h-[300px] grid place-items-center">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="text-center space-y-2 z-10 text-white">
          <div className="text-5xl font-bold">About us</div>
          <div className="">Get to know our talented team</div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-3">
          <Title title={'Meet Our Team'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa placeat fugiat atque aliquam. Reiciendis exercitationem distinctio quibusdam. Fuga, blanditiis.'} />
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {aboutList.about.map(item => (
              <AboutCard {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className=''>
        <div className="container mx-auto px-3">
          <Title title='Frequently Asked Questions' desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa placeat fugiat atque aliquam. Reiciendis exercitationem distinctio quibusdam. Fuga, blanditiis.'} />
          <div className="my-10 grid md:grid-cols-2 gap-5">

            {aboutList.accordion.map(item => (
              <AccordionItem {...item} />
            ))}

          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage