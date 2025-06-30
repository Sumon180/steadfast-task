import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/actions/getProductBySlug";
import { IoIosArrowForward } from "react-icons/io";
import RatingSummery from "./components/RatingSummery";
import ProductPrice from "./components/ProductPrice";
import SelectVariant from "./components/SelectVariant";
import AddToCart from "./components/AddToCart";
import ProductImageGallery from "./components/ProductImageGallery";
import { Separator } from "@/components/ui/separator";
import ProductDescription from "./components/ProductDescription";
import ProductSpecification from "./components/ProductSpecification";
import {
  getCategoryById,
  getSubcategoryById,
} from "@/lib/actions/getCategories";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) return notFound();
  const category = await getCategoryById(product?.category_id);
  const subCategory = await getSubcategoryById(product?.sub_category_id);

  console.log(subCategory?.name);

  return (
    <>
      <div className="px-3">
        <div className="content_wrapper flex items-center gap-1 text-sm">
          <Link href={"/"}>Home</Link>{" "}
          <IoIosArrowForward className="text-gray-500" />
          <Link href={""} className="text-gray-500">
            {category?.name}
          </Link>
        </div>
      </div>
      <div className="bg-white px-3">
        <div className="content_wrapper flex flex-col lg:flex-row items-start justify-between gap-8">
          <ProductImageGallery thumbnail={product.thumbnail} />

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
          <div className="w-full lg:w-[323px] lg:min-w-[323px]">
            <div className="border p-5 rounded-xl">
              <p className="text-lg">Delivery Options</p>
              <div className="flex items-start gap-2 mt-3">
                <div className="pt-1">
                  <Image
                    src={"/images/package.png"}
                    alt={"package"}
                    width={100}
                    height={100}
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <p className="font-medium">Regular</p>
                  <p className="text-sm text-gray-600">
                    Delivery within 2-3 days
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-3">
                <div className="pt-1">
                  <Image
                    src={"/images/package-moving.png"}
                    alt={"package"}
                    width={100}
                    height={100}
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-5">
                    <p className="font-medium opacity-30">Express</p>
                    <span className="text-xs text-red-500">Not Available</span>
                  </div>
                  <p className="text-sm text-gray-600 opacity-50">
                    Delivery within 2-3 days
                  </p>
                </div>
              </div>
            </div>
            <div className="border p-5 rounded-xl mt-5">
              <p>Sold by</p>
              <div className="flex items-center gap-2 mt-3">
                <Image
                  src={"/images/Ellipse-2010.png"}
                  alt={"package"}
                  width={200}
                  height={200}
                  className="w-12 h-12"
                />
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-medium">BD FASHION HOUSE</p>
                    <Image
                      src={"/images/fi_9918743.png"}
                      alt={"package"}
                      width={200}
                      height={200}
                      className="w-5 h-5"
                    />
                  </div>
                  <div className="w-full h-5 mt-1">
                    <Image
                      src={"/images/Group-1010108421.png"}
                      alt={"package"}
                      width={200}
                      height={200}
                      className="w-auto h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-5 mb-3">
                <button className="bg-primary/20 py-1 text-primary w-full rounded-sm">
                  Chat Now
                </button>
                <button className="bg-gray-100 py-1 w-full rounded-sm">
                  View Shop
                </button>
              </div>
              <Separator />
              <div className="flex items-center justify-between mt-3">
                <div>
                  <p className="text-gray-600 text-sm">Ship on Time</p>
                  <p className="text-[28px] text-gray-500">100%</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Chat Response</p>
                  <p className="text-[28px] text-gray-500">90%</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Shop Rating</p>
                  <p className="text-[28px] text-gray-500">99.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 space-y-5">
        <ProductDescription />
        <ProductSpecification />
      </div>
    </>
  );
}
