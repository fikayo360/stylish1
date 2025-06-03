import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './testimonials.css';

const Star = () => {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="#eaeaea" 
      strokeWidth="1"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

const StarRating = () => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -30 : 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="testimonial-card"
    >
      <StarRating rating={testimonial.rating} />
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="testimonial-author">
        <div className="author-image">
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className="author-info">
          <h4>{testimonial.name}</h4>
          <p>{testimonial.title} at {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      title: "Managing Director",
      company: "Apple",
      image: "https://fikayobytes.netlify.app/fikayo.png",
      text: "Working with this designer was a game-changer for our projects. Their creativity and attention to detail brought our vision to life in ways we couldn't have imagined. I can't recommend him enough.",
      rating: 5
    },
    {
      id: 2,
      name: "Sofia Carter",
      title: "Marketing Manager",
      company: "Twitter",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIVFRUXFxcXFRUXFRYVFRUVFRUXGBUVFxgYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUrLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EADcQAAEDAgQEBAYCAQMFAQAAAAEAAhEDIQQSMUEFUWFxBiKBoRMykbHR8MHhQlJi8RQVIzNyQ//EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EACIRAQEAAwADAAMBAAMAAAAAAAABAgMREiExBEFRIiMycf/aAAwDAQACEQMRAD8A108J0oXlvTNCUJ0kDQmRQlCBoShPCUIGhNCJKEAwlCKE0IBypQihMgGE0I4TQgCEoRJoQAWpoRkJkAFNCMhCUA5UyIhJT1C4knTwoSFOnSQNCUIkkAwlCKEyBoShM5yEVQdEBJJ0oQMmhOkgGEyJJAMJiiTIBQwjhMgBMQjTFBGkiKSC0E6ZOgdKEk6BIXVANSBafQIiucxDz8TzPHm8sRLhBiBewgnVTJ0tblXFtaYKiq4mPMI/o7rDxVRlnXMWMjloBKsUcbTIMiABfNeSOX4/TPijqpxXxDlcWAGACS7kbwCPeeoVZ2LIsXEGQWiZlu4t2N0HiajTNOWAAySQP8gYsSOwXJUMU9pu52hsZ+i7Y4Sxxyz5XqHDeKsqQ3R0aHf1WiSvJ+H4803h5dv9vl912GD4+Xf4lwiSZFlTPXZ8Xx2SunlMXhZOP4gWNmQN7mByAO41+64zH+IaxcctRzRtlEet1XHXck5bJi9IzhPK80p+KK7Wlpl2wJPmB2PWDzWzS8bQINIuIAvnHmdobAWCtdWURNuNdlCaFncJ4yyuLNLTydE+y0lzs46dCkiITKABTFGhIQAUkRCSCcJ0KSA04QrH49xN9LKGdJtOtoA3UydRfTWrYhjBLnBoubkDTVcnxrxDhyHZXeYGIymT2mLXVbjb3Vc8AmQ0QfK4ZRJjNoJcPouNxjSC4SHSZkc/0rtr1y/XLZss+LWL4q9zneeANBGvf6qoMY+Pm1ub/vT6Ks4/2hcdFqmMZblavjFu3JJ5yT1hQ1q5JuIKjd5QJb7qJzybJxHUgJJ2tz6rS4fxEsMEx1WVRYXGAY3v0QvJnslnSXntvcR40arctxzM6gdFk/E5mRy3QOHWd0LjG6TGT4m5W/T5inptJkgG1z++qELQ4PjBSfmLenp0lL8J9T8N4vXw5EGByeLG69Q4fXL2Nc4QS0EjlI0XmuP4vmfmEEWjM0EjLynTstTB+MXAAOE3EuJFhbUQs+zC5e5GjDOY+rXfpLM4fxqjUOVr2l3IH3C0gVns40QihKNCVAFMnKSAwUUqMFUuK1HBvlB0Mx7fypFitj2NDpI8o8xnSLrmsT4wZoGGNnWF9rbLGxNGqRDi5rSBmnedgPRY2Ie1trmDIPNd8NccM9lWMdxJ9RxPxHAcpPe6zYadz1/5+qf4uY8tb+n9KtUfYDnqtEnGbK9Ko0Cbk9oj+0dBgP45x9kLiAgznZWVG4yZuihvP2T0WXi8xYRPooRr3RKxQptzDzHtdQ1gA4xz9u6uMoEEZpvKf/oJgjRV8ot4WqtJxdPbXkgqNjkZVvJFhqTH8KLF4Qt7KfKI8bw4yaA90xi3m0QUMukGUM2HqeqlCWrH9IATNhN90FPcowfRBLTpmTDYMxYiAf8A6ldj4X4y5rxTqPc4ZSCXAksIvrqRZctSxQgCGxlcDIuSZv3WvgcaS6i00xAY4ASQ9wgASRsTt0XHZOz27a7yvRMNiW1BmaZHNSlc1wHieZzmkQc0agtcTqG7yIuulKyWcrVL0JSSKShIMyz+NcRbSYTPmPy/zPRXKjoC5zxJiqTRLyZ2aNTNvQDfsr4ztVyvI5XinEjUAvJHQb6LLqdR1VqvipjKBHONb2Pe8KtUrXgm255LbjORiyvQNcIP0UIapjUizfqdeyGizM6Nu6sqWIMgECBGwt/ynpgckjXJmNNVY+JabEfiyCB4Mzcfv3Wlw/Bmo8OcB+eqjwDDUeAI7c13XC8AA0CFw27PH006NXl7rnhgTO4jY3nkQr7eHQ2AF0j+GhHTw8WhZcs+tuOuR5tWwRbVIg/OCLczK6Grw4FtxK6argmkzlE84UOJoQFOWzy4jDVMevMuI4T4bza0z6KtiCJECN11fHsP5gSLEFp9dFyuKny//IH0WvVl5Rg34eOXoDkpOqkYeSY1CNbrq4mbU18s81qcFxNPMDVMiYADZyzuTsPVUHYnaLbGLpx5SCIt7x/KrlOxbG8rt6fCvh4hj6bZBcSASYaCACWciCTbquwC5bgeLNbDsJ1Doc7SI6j0XTU3WWLPvfbbjznoRSSKZUWVaxGUzYc15txzEmtUMNy2kCZJbfW9iu649Xa2kQXAToZiL68yF5vxStJPlaC4D5ZEACLzqdfqtOnH9s+7L1xB8MiCbA/YpqxGux+pTh7jbkIG4tyPqhcZPpZaGdE0Wmb8kV5HNSilJkOCQZcEOFlKEVNxMtF52680dQZXQLgC/feE9CneQeemqLD0iTG7iBPcqLSTrd8OYVxu2nmdoDoAOp/hdLGMpHMWsI5AE/zKfC1mUGNbYQB07kq3Q4zTd/8Aozl8yyW3K943zGYznV3h/iBrvLUZkPMXafwtYtabhYoDXDYq/gqoykTouOfP474S/wBHia7KfzEBc7xLjZcctFk9TN+wCuY6oKj8uqWZjBYARvYBMOfxGff65Pi1WuaZ+JSgC+YTbrBXMPBc3svReIYpr2kSL9QVxnFcIKbwARcb6D9utWrL9cZN2P771i0zt2R1rGOSZ1O+oRYg3jXqtDKHrN1Ox0wIjWfyJ1UQ0/fZT4VjSbmBFyNQoqY6LwvWe17RMt8xI2mJ5a256LtsLVkx+9l5xgWOpVnMFQNuW5p5wJj0XoHBwSzzzmmDOsDSY6LJtnvrXqvrjTSSCZcXV5/4o4iKhhugNrfOBv0AMLlq1IEy1089iF1XiFzabclMzm+YXIb25Ty6LmCYIjbUrbq+Me36d7gAAD3PK91XJkqWr9SdbQhphdHKmOwRE5flJnf8JAXKeozQ+0zopBU5DSbCdD91oeHKOas21hc99lnk2na4A5Le8GtuTvp7rltvMa7aMe5yOzq8Lp1ILmgxzCh/7FSBkMHoSPsVrYKlmEKV+FgzNlhmyz49K6sb9UaWFDJd/Jie3NRtfBU+JfNm3PsoMPhZd5zlUW2rY4yKgfFTVPjuFCoBLnd7T6yIiyXFcOGuGUyruBcHNF78jqrY5We4rnhMvVYL/DggBriCOVpkzeBdYPi/D5TSO4kFeh1aRbdcT43u1p/3j3BXXXnbnOuO7VMdd45LUg8k9S5nmpqYHLfVV3C55AxbdbHmnZM91LTOUzqAZ73BgoAI6fuif4pAi0HUIRfxj87W1crRmcQWgnMYEkk7Whdp4T4hnaGuPn1AmfKNPuuCoU5dlcY5Gxg9iR99lvcIpupODoa2bNcXREAF2k7ELjsk5xo12969ESQUagc0OaQQdCNCksjS8wxZvcxAyk63nVUKbg0G3SVYxFzAMkH6qDENvAOvcDbmt2LHkhc8HZLNazR+9kD9RAsfdFRaTcaA3/Cu5AqfT7qcmGDQg/dRVD5oFu6HpsgkFXyxEmVu+EKsF4jcfvssOpEiOS1vCdb/AMzh/qbP0P8Aa57f+ldtN5sj0DC4qByTisahvIZ9+3RBhaYtKfiTH+XIQASAT/pB3Xnydr1bklexrtvpb7IWcNptJc2WuO8k+xKt4DhDnCPjCZboNnCZ1V4eHqpFqo+aNOsTqrzC/wBUueH7czi8Mc0kknSQYEdgpcI3lqFp4/gFUEzUBuBMRtMrCwj3fGyagCS4aDkDzKnxqJlj+mriMd5YK4LxjiZDW83ewB/IXX41i4LxGc1YNFwxt+5P/Ctox/2p+Tn/AMfFHD3J7c4Gyjz3iAD9AiAnQKCrF9ZW95aZ1XfKD16lQ2OoRN+QjQg3QMKCansRP4IXbcIa2pSzOaM87cucdguMY6HCLaadem66Dw8Sawa7/wAkeZoBABygRrAtPNcds9O2q8rusG8AADlP5+6Sh4dXzNBcA1xuACTDdpPNJZK1udHB/h03ElsxDXDkb3JsL8ua517SM5IA6kbagg6LrfFBJYGtBM6xz2C5TH4YsYJcZtDSDYm+9t1o13rhnOMurdovoUdJksd+jT7qNtyZ2U8w2Od5t6Luzq9Okd/ugdSMpw69imZJ15jt6qyq3iKUZSB5T5cwFsyPBVPhVWv0a3U/7dFBQxr6RIafKT5mkBzTGkgqDGYx1Q3gAbNGUfRV5b6W7J7ep4OuCAQVosdmBBXDeHMW5rADdto6CNF0mGxd1gzw5Xp4Z+UjQwlLKdTl9wtH/qi2A2q6B1O6rUu0pyyNlXzdv/VbieIe4nzk9ST2squHAYOpVvEVOkLJq11PbVcvQsdiMoLjsCV55iiahL4u4kxpG32+y1fEnFcx+G35dXHn07LD8sWku+jQP5WvThydef8AkbPK8n6FSYQekc47KI3n+TcqyxuUAzr7c1C4RPI6Lsz8KgQZlC2kTFvf8o6DdRP4TBusnTSEGlgcD8RzgTBAhotc8ld8IzTrtDm3NoPzNkwY5degVXh4Jq02l3/siY2gSOxsFpNoOwlYPzCpmM5T85m9t51HUrllfsdcZ8rtRRa0zEDpz6pKQjdJY2tn4ykS0zcXtF/2y4nxE17nQ+0CQAZEWjT1+q9DIlY3E8GL6gOiSDBtFgdl115cqmePY4fE4U0w2fmINxoZgwfqR6KrUOnNbnFYOXzlwboNAOkC371WP6GJv1WrG9jJlOXiuxku6I6wAuD6apx89pG3ogqU7q6pmnrH9qMtVuhlANp5flRjLYkHVEOw8M0s1FvqPoYWjXoFkEKh4MePhRf5j910eKpy1YM7zOvS1+8IhwWOe3ZW/wDuJVLDDZT1Wqnp1lvEWLxmb+ln1mkhXBTBKlqUhGinv8R9cD4jw2Qg85CysOJK7Hj2EDo6FYtfh2QkgWIPoVq17J48rFt1XytjPr1c0QIAF5Ub3aCLaxGq18Xwb4YZYy4CQREGAeyir4D4djqW5hF7fsrs4cqlhKWaRBvYdzoma4g3Ogy/xtutYYQNyPDCQ4sIMzNxIJHVKlw3NW/xptJnzaDmI/hUuUX8KLw9h89en5fl8zu7QS2StrxDhMlVldsgmxM5YIvN7aAiFc8OcO+HLhmAcBGYibco2/pamOoFzCGxO0iRI0lZ8s/9NGOH+Q8MxZqMlwgjW8z1SUHBmhocwjzCCTsZmI5aGyS5We14vgqOtSDteSIJZkSxavAA83jKTNrGfx+FU414eIpBlFhcc0xq6/L2XZ4XhznXdYct/XktrD4ANFh+9ea1a9Wd931GfZnhPUeTcJ4DWFUB9GQDDg4WPIzstLEeDpDnZoN8rRoJMwJ113XpNbBAhV6eD2K0+E+s/k8ud4XNENdVfAdMgeyt8S8N0hQFRgcHh4YSSCD5XOmxIOg7L0PifBRXtMWG0iAZBHIhQcd4W51D4bBJaARb5nN19SJHqqZS8vFsednXAeHaWQEHmulzSFj4OjeQtKnOi8/O9vXpYTk4Ci+CrNRwhUSS13RWs4hQsegzdHVama6yT3Kv7SzMbRzKxwHg/wAeq1pHlb5qnYaD1PtK0MDwt9Yw0W3cdB+T0XYcOwDKDMre7nbuPMrTp13K9vxm3bZjOT6wuPcJa9h0Ebkev8LBreHxVtlgRlBk5hv5enRd9iKWYEaT6/VV8Jg8lje3LVa7O1jmXHJv8P0y9uXNIygjYEAAOA0B3UuI4CXaOAIu0xlIP8rq6uFvIsVIxvO6tdeN+xHnZ8cfXoupwHDXQ7GOSizrtMRhmPEFoWDxHgkXp/Qm312WbP8AHs94tGG+X1k5/CUg2zZy9dZ7m53SR1AWkgggjUFJZrHbo8y1+D8PJ859OnVZvDqHxHgbaldph6UCFp/H19/1XDds5/mFQoAKyGpRCNpWtlAWKI0xN1ZIUddqCN7Yhw217KYMGqjpv2TMdl6hEsTjHhyXGpRAk3czQOPNvIrnalMtMEFpGoIg/RehgzoVHiKDXiHsDh1AKzbNEy9z00a/yLj6vt55Vpyho4Zz7NBd0aCfsu5HCKAMii31kj6FXqQgQ1oA5CwXKfjX911v5U/UcXh/D9d/+GUc3GPYX9ltYPwywXe4vPIeVv11Psttx5kBO2q3uu2P4+MccvyM6VOi1oAAAA2FgEzgndUTArvxwAGosqdPKlCJyYtRlIhSIsqiqBWCFG5iJYuPwrX2cOxHzDsf4SWhXppKtwxvuxMyynysHw9T/wAuvsF1Rs6NjosLg1LKxnWfcFbNV/ka7l/wo148xkNl7lVk9kF1Ix1ki1XUJj0ZEqMtTtcgjqUVGWlXJTEIspBp2kKRvxNnfUKc0kJBCCMuqb+ylY073RtKSgRuAOyEt6KQpsqAQnCeE6BimnoihOVKERKcJykEQYhM6ykVPGvgtHVEgrOToJlMpSgoCGM6R91aZ/63t5Eqrh7sdzCs0Xecj/U2UVT4F8tCshZmAqZXFvWy0yoCISITQllQOEUoYSRI0xSlCQgfKkE2VOh0kinTIGSTQlCHTpiUoTIgkgnTFqB1mcRd5wOS0AFj4h8vKJi3SCSVEpKRUwRhzhzBHrsrBMFh6QqLpa4fUHmruLMsDh3UoR4nyvBWrRfIlZ2MbmaCO6k4bXkQoGgnBTISgkSQZ0+ZQCSQ5k6BwkmKElA6SbMlmQEkmlIIEUoTlCXoHKYlDmUdaopA1KliscOkz1V+u7yErMYUTGnQSVSlVneAkgLEty9Wn26hKjU8pbMjUH7gp65jtyVIt3afTdShr4a7I5W+iq0/I9ScNqzPoixdPdBo0nyESoYKrsr0ogyIFJMVCRSkEyUoHSTSkgdMkSmQOEZQ0my70P3CmNIfpKcEBKSsfCHX6oTTHMoIHFUqhLjAVyvYKNrQACpFDipgBqoEeUIuJVJqEcrKNx8qhYeHckoKD41SUjTzE6qtVYOSZJFRcIPmP7utKpqkkgq0Df1V5jjCSShCemU6SSkIoC5JJQkwKJJJA6QSSUh6Jv6KcuSSUAmlEUkkFHFG47KCu4iI6pJKRg1j5nH/AHH7lDUNk6SqsemJakkkrD//2Q==",
      text: "They were professional, responsive, and truly invested in our success. The entire process was seamless, and we couldn't be happier with the final product. Fantastic experience!",
      rating: 5
    },
    {
      id: 3,
      name: "Chloe Ortiz",
      title: "CEO",
      company: "Survey Monkey",
      image: "data:image/jpeg;base64,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",
      text: "From concept to completion, the designer delivered exceptional quality. They took the time to understand our brand and created stunning visuals that perfectly captured our identity. Their creativity and dedication were evident in every aspect of the project.",
      rating: 5
    },
    {
      id: 4,
      name: "Mario Rossi",
      title: "CFO",
      company: "Microsoft",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s",
      text: "The designer's expertise transformed our branding. Their unique approach and commitment to excellence made a significant impact on our business. They listened to our ideas and brought them to life with precision and creativity.",
      rating: 5
    },
      {
      id: 5,
      name: "Mario Rossi",
      title: "CFO",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      text: "The designer's expertise transformed our branding. Their unique approach and commitment to excellence made a significant impact on our business. They listened to our ideas and brought them to life with precision and creativity.",
      rating: 5
    },
      {
      id: 6,
      name: "Mario Rossi",
      title: "CFO",
      company: "Microsoft",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s",
      text: "The designer's expertise transformed our branding. Their unique approach and commitment to excellence made a significant impact on our business. They listened to our ideas and brought them to life with precision and creativity.",
      rating: 5
    },
      {
      id: 7,
      name: "Mario Rossi",
      title: "CFO",
      company: "Microsoft",
      image: "https://i.pinimg.com/474x/25/3a/bf/253abf4f1f4bc16b6dc04571f8d21624.jpg",
      text: "The designer's expertise transformed our branding. Their unique approach and commitment to excellence made a significant impact on our business. They listened to our ideas and brought them to life with precision and creativity.",
      rating: 5
    },
      {
      id: 8,
      name: "Mario Rossi",
      title: "CFO",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
      text: "The designer's expertise transformed our branding. Their unique approach and commitment to excellence made a significant impact on our business. They listened to our ideas and brought them to life with precision and creativity.",
      rating: 5
    }
  ];

  return (
    <div className="container testimonials-section">
      <h1>Testimonials</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};
 
export default TestimonialsSection