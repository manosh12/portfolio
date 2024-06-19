export const Title = ({title}) => {
  return (
    <div className="text-center text-3xl font-bold my-10 mx-5">
      <div className="text-center">
        <div className="flex items-center justify-center">
          <div className="border-b-2 border-red-600 w-16"></div>
          <span className="px-4 text-xl md:text-2xl font-bold text-gray-600">{title}</span>
          <div className="border-b-2 border-red-600 w-16"></div>
        </div>
      </div>
    </div>
  )
}