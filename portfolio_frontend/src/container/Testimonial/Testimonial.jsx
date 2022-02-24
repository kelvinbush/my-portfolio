import React, { useEffect, useState } from "react";
import "./Testimonial.scss";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { client, urlFor } from "../../client";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    client
      .fetch(testimonialsQuery)
      .then((data) => {
        setTestimonials(data);
      })
      .catch((e) => console.log(e));

    client
      .fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return <div>Testimonial</div>;
};

export default Testimonial;
