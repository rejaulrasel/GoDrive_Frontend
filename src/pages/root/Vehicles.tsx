import { FormEvent, useEffect, useState } from "react";
import Footer from "../../components/root/Footer";
import Navbar from "../../components/root/Navbar";
import { TVehicleResponse } from "../../interface/response.vehicle.interface";
import axios from "axios";
import antSelectOptionsGenerator from "../../utils/AntSelectOptionsGenerator";
import { heroDistrictFilterOptions } from "../../const/filter.district";
import { Select } from "antd";
import VehicleCard from "../../components/vehicle/VehicleCard";
import { useLocation } from "react-router-dom";
import LoadingSpinier from "../../components/global/LoadingSpinier";

const Vehicles = () => {
  const routerLocation = useLocation();
  const searchParams = new URLSearchParams(routerLocation.search);
  const [color, setColor] = useState(searchParams.get("color") || "");
  const locationX = searchParams.get("location");
  const [data, setData] = useState<TVehicleResponse[]>();
  const [open, setOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [location, setLocation] = useState<string>(locationX ? locationX : "");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = (e.target as HTMLFormElement).search.value;
    setSearchTerm(value);
  }

  const fetchProducts = async (): Promise<void> => {
    try {
      const response = await axios.get(
        "https://car-rental-server-new-v1.vercel.app/api/cars",
        {
          params: {
            searchTerm,
            location,
            color,
            minPrice,
            maxPrice,
            sortOrder,
          },
        }
      );
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setLocation("");
    setMinPrice("");
    setMaxPrice("");
    setSortOrder("asc");
    setColor("");
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, sortOrder, location, minPrice, maxPrice, color]);

  return (
    <div className="">
      <Navbar />
      <div data-aos="fade-left" className="min-h-screen m-5 md:m-10">
        <div className="">
          <div className="md:flex hidden justify-between items-center">
            {/* search bar */}
            <form onSubmit={handleSearch} className="mb-5">
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                name="search"
                id=""
                placeholder="Search..."
                className="py-1 px-3 border rounded-l-md "
                required
              />
              <button
                type="submit"
                className="py-1 px-3 border border-rose-600 bg-rose-600 text-white rounded-r-md"
              >
                Search
              </button>
            </form>

            <div className="flex justify-between flex-wrap mb-5">
              <div className="mr-2">
                <Select
                  id="location"
                  showSearch
                  placeholder="Select Your Area"
                  optionFilterProp="label"
                  options={antSelectOptionsGenerator(heroDistrictFilterOptions)}
                  aria-label="Location"
                  onChange={setLocation}
                />
              </div>

              <div className="flex justify-center items-center">
                <div className="">
                  <Select
                    id="price"
                    showSearch
                    placeholder="Shot Price"
                    optionFilterProp="label"
                    options={[
                      { value: "desc", label: "Low To High" },
                      { value: "asc", label: "High To Low" },
                    ]}
                    aria-label="Price"
                    onChange={setSortOrder}
                  />
                </div>
              </div>

              <div className="flex ml-3">
                <div className="flex justify-center items-center border rounded-md px-2 ">
                  <p className="mr-1 text-gray-400 font-thin">Min Price $: </p>
                  <input
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="rounded-md w-16"
                    type="number"
                  />
                  <p></p>
                </div>
              </div>

              <div className="flex ml-3">
                <div className="flex justify-center items-center border rounded-md px-2 ">
                  <p className="mr-1 text-gray-400 font-thin">Max Price $: </p>
                  <input
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="rounded-md w-16"
                    type="number"
                  />
                  <p></p>
                </div>
              </div>

              <button
                className=" px-2 py-1 bg-rose-600 text-white ml-3 rounded-md"
                onClick={() => clearFilters()}
              >
                Clear
              </button>
            </div>
          </div>

          {/* mobile */}
          <div className="md:hidden mb-5 w-full space-y-3">
            {/* searching */}
            <form onSubmit={handleSearch} className="w-full flex">
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                name="search"
                id=""
                placeholder="Search..."
                className="py-1 px-3 w-full border rounded-l-md "
                required
              />
              <button
                type="submit"
                className="py-1 px-3 border border-rose-600 bg-rose-600 text-white rounded-r-md"
              >
                Search
              </button>
            </form>

            {open && (
              <div className=" space-y-3">
                {/* shorting */}
                <div className="flex justify-center items-center w-full">
                  <div className="w-full">
                    <Select
                      id="location"
                      showSearch
                      placeholder="Select Your Area"
                      style={{ width: "100%" }}
                      optionFilterProp="label"
                      options={antSelectOptionsGenerator(
                        heroDistrictFilterOptions
                      )}
                      aria-label="Location"
                      onChange={setLocation}
                    />
                  </div>
                </div>

                {/* price */}
                <div className=" w-full">
                  <Select
                    id="price"
                    showSearch
                    placeholder="Sort Price"
                    style={{ width: "100%" }}
                    optionFilterProp="label"
                    options={[
                      { value: "desc", label: "Low To High" },
                      { value: "asc", label: "High To Low" },
                    ]}
                    aria-label="Price"
                    onChange={setSortOrder}
                  />
                </div>

                <div className="flex gap-1 justify-between">
                  <div className="flex ">
                    <div className="flex  items-center border rounded-md px-2 ">
                      <p className="text-sm text-gray-400 font-thin">
                        Min Price $:{" "}
                      </p>
                      <input
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="rounded-md w-16"
                        type="number"
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex justify-center items-center border rounded-md px-2 ">
                      <p className="mr-1 text-sm text-gray-400 font-thin">
                        Max Price $:{" "}
                      </p>
                      <input
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="rounded-md w-16"
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {open ? (
              <button
                onClick={() => {
                  clearFilters();
                  setOpen(false);
                }}
                className="w-full bg-rose-600 text-center rounded-md text-white py-1"
              >
                Clear
              </button>
            ) : (
              <button
                onClick={() => setOpen(true)}
                className="w-full bg-rose-600 text-center text-white py-1"
              >
                Add Filter
              </button>
            )}
          </div>
        </div>

        {isLoading && <LoadingSpinier />}
        {!isLoading && isError && (
          <div className="flex justify-center items-center mt-52 ">
            <p className="text-sm">Request failed with status code 500 🙏</p>
          </div>
        )}
        {!data?.length && !isLoading && !isError && (
          <div className="flex justify-center items-center mt-52 ">
            <p className="text-xl">Bro! It's Empty😑</p>
          </div>
        )}
        {/* card */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {data
            ?.slice()
            .reverse()
            .map((vehicle, indx) => {
              return <VehicleCard key={indx} {...vehicle} />;
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vehicles;
