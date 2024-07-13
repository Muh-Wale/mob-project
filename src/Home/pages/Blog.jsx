import blogs from '../data/blogs.json'
import blogOne from '../../assets/blogOne.png';
import blogTwo from '../../assets/blogTwo.png';
import blogThree from '../../assets/blogThree.png';
import blogFour from '../../assets/blogFour.png';
import blogFive from '../../assets/blogFive.png';
import blogSix from '../../assets/blogSix.png';

const imageMap = {
    "/assets/blogOne.png": blogOne,
    "/assets/blogTwo.png": blogTwo,
    "/assets/blogThree.png": blogThree,
    "/assets/blogFour.png": blogFour,
    "/assets/blogFive.png": blogFive,
    "/assets/blogSix.png": blogSix,
};

const Blog = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <div className=''>
                <div className='text-center text-black text-[50px] font-semibold text-xl md:text-3xl lg:text-5xl capitalize'>
                    <h1>read through our blogs</h1>
                </div>
                <div className=' w-full flex justify-end  px-5'>
                    <a href="" className=' text-[#2549D3] font-semibold text-lg'>see more</a>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='mx-auto'>
                        {
                            blogs.blogsOne.map((blogsOne, i) => (
                                <div  key={i} className=' my-5 mx-2 max-w-[430px] h-fit'>
                                    <div className="rounded-t-lg overflow-hidden cursor-pointer ">
                                        <img
                                            className=" w-full rounded-t-lg max-h-[500px]"
                                            src={imageMap[blogsOne.pic]}
                                            alt="A beautiful landscape"
                                        />
                                        <div>
                                            <div className='flex justify-between items-center my-2'>
                                                <div className='flex gap-3'>
                                                    <div>
                                                        <p className='capitalize font-medium'>{blogsOne.contentOne}</p>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium text-[#593F00]'>{blogsOne.contentTwo}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='capitalize font-medium'>{blogsOne.contentThree}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='my-1'>
                                                    <p className='capitalize font-medium text-xl'>{blogsOne.contentFour}</p>
                                                </div>
                                                <div>
                                                    <p className=''>{blogsOne.contentFive}</p>
                                                </div>
                                            </div>
                                            <div className='my-2'>
                                                <a href="" className=' font-semibold text-sm'>{blogsOne.contentSix}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='mx-auto'>
                        {
                            blogs.blogsTwo.map((blogsTwo, i) => (
                                <div  key={i} className=' my-5 mx-2 max-w-[430px] h-fit'>
                                    <div className="rounded-t-lg overflow-hidden cursor-pointer ">
                                        <img
                                            className=" w-full rounded-t-lg max-h-[500px]"
                                            src={imageMap[blogsTwo.pic]}
                                            alt="A beautiful landscape"
                                        />
                                        <div>
                                            <div className='flex justify-between items-center my-2'>
                                                <div className='flex gap-3'>
                                                    <div>
                                                        <p className='capitalize font-medium'>{blogsTwo.contentOne}</p>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium text-[#593F00]'>{blogsTwo.contentTwo}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='capitalize font-medium'>{blogsTwo.contentThree}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='my-1'>
                                                    <p className='capitalize font-medium text-xl'>{blogsTwo.contentFour}</p>
                                                </div>
                                                <div>
                                                    <p className=''>{blogsTwo.contentFive}</p>
                                                </div>
                                            </div>
                                            <div className='my-2'>
                                                <a href="" className=' font-semibold text-sm'>{blogsTwo.contentSix}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='mx-auto'>
                        {
                            blogs.blogsThree.map((blogsThree, i) => (
                                <div  key={i} className=' my-5 mx-2 max-w-[430px] h-fit'>
                                    <div className="rounded-t-lg overflow-hidden cursor-pointer ">
                                        <img
                                            className=" w-full rounded-t-lg max-h-[500px]"
                                            src={imageMap[blogsThree.pic]}
                                            alt="A beautiful landscape"
                                        />
                                        <div>
                                            <div className='flex justify-between items-center my-2'>
                                                <div className='flex gap-3'>
                                                    <div>
                                                        <p className='capitalize font-medium'>{blogsThree.contentOne}</p>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium text-[#593F00]'>{blogsThree.contentTwo}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='capitalize font-medium'>{blogsThree.contentThree}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='my-1'>
                                                    <p className='capitalize font-medium text-xl'>{blogsThree.contentFour}</p>
                                                </div>
                                                <div>
                                                    <p className=''>{blogsThree.contentFive}</p>
                                                </div>
                                            </div>
                                            <div className='my-2'>
                                                <a href="" className=' font-semibold text-sm'>{blogsThree.contentSix}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog