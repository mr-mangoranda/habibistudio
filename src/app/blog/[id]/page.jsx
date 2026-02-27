import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, tempore.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla officia expedita, vel sint doloremque unde pariatur nemo mollitia repudiandae reprehenderit repellendus, quo, dignissimos inventore asperiores corrupti facilis itaque! Perferendis sit nobis suscipit reprehenderit ea, architecto alias ex exercitationem, laborum tempore velit facere odio. Velit totam eius, est placeat quaerat blanditiis?
          </p>

          <div className={styles.author}>
            <Image 
              src=""
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src=""
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eum at, obcaecati quaerat reiciendis minus adipisci sapiente, in est corporis odio. Inventore voluptatem, hic quibusdam cupiditate unde consequatur ex earum dolore dicta voluptate est aut at dignissimos praesentium recusandae. Nobis iusto ratione minus veniam tempora ea blanditiis doloremque quo. Ratione.
            
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default BlogPost