import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/actions/getProductBySlug";
import { IoIosArrowForward } from "react-icons/io";
import RatingSummery from "./components/RatingSummery";
import ProductPrice from "./components/ProductPrice";
import SelectVariant from "./components/SelectVariant";
import AddToCart from "./components/AddToCart";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  console.log(product);

  return (
    <>
      <div>
        <div className="content_wrapper flex items-center gap-1 text-sm">
          <Link href={"/"}>Home</Link>{" "}
          <IoIosArrowForward className="text-gray-500" />
          <Link href={""}>Tops</Link>{" "}
          <IoIosArrowForward className="text-gray-500" />
          <Link href={""} className="text-gray-500">
            T-Shirts
          </Link>
        </div>
      </div>
      <div className="bg-white">
        <div className="content_wrapper flex items-start justify-between gap-8">
          <div className="relative w-xl h-[576px] min-w-[576px] border rounded-md">
            <Image
              src={product.thumbnail}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg"
            />
          </div>

          <div className="w-full">
            <h2 className="text-[20px] font-medium text-gray-900">
              {product.name}
            </h2>
            <RatingSummery />

            <ProductPrice
              price={product.product_detail.regular_price}
              listPrice={product.product_detail.discount_price}
            />
            <div className="flex items-center gap-2 text-sm my-5">
              <span>Promotion</span>
              <div className="bg-orange-600 text-white px-2 py-0.5">
                Min. spend ৳550
              </div>
            </div>
            <SelectVariant variations={product.variations} />
            <AddToCart />
          </div>
          <div className="w-[280px] min-w-[280px]">
            <p>Delivery Options</p>
          </div>
        </div>
      </div>
    </>
  );
}
