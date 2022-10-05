import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../CommenStyled";
import axios from "axios";
import { url } from "../../features/api";
import { toast } from "react-toastify";

const UpdateProduct = ({ itemUpdate ,setEditShow ,  setOpenPopUp, setUpdate, update }) => {
  const [productImg, setProductImg] = useState(itemUpdate?.image?.url);
  const [name, setName] = useState(itemUpdate?.name);
  const [brand, setBrand] = useState(itemUpdate?.brand);
  const [price, setPrice] = useState(itemUpdate?.price);
  const [desc, setDesc] = useState(itemUpdate?.desc);
  const [ram, setRam] = useState(itemUpdate?.ram);
  const [rom, setRom] = useState(itemUpdate?.rom);
  const [battery, setBattery] = useState(itemUpdate?.battery);
  const [camera, setCamera] = useState(itemUpdate?.camera);

  

  const handleinputimage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

 


  const updateProducts = async () => {
  
    try {

      const response = await axios.post(
        `${url}/products/updateProduct?id=${itemUpdate._id}`,
        {
          name,
          brand,
          price,
          desc,
          ram,
          rom,
          battery,
          camera,
          image: productImg,
        }
      );
      setUpdate(!update)
      toast.success("Your Product is Updated Successfull")
      console.log(response)
    } catch (error) {
      toast.error(error.message)
      console.log(error.message);
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
 
    updateProducts()
    setEditShow(false)
    setOpenPopUp(false)
    setProductImg("");
    setName("");
    setBrand("");
    setPrice(0);
    setDesc("");
    setRam("");
    setRom("");
    setBattery("");
    setCamera("");
  };



  return (
    <StyledCreateProduct>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Create a Product</h3>
        <input
          type="file"
          accept="image/ "
          onChange={handleinputimage}
          required ={itemUpdate ? false : true}
        />
        <select value={brand} onChange={(e) => setBrand(e.target.value)} required>
          <option value="Select Brand">Select Brand</option>
          <option value="iphone">iphone</option>
          <option value="samsung">samsung</option>
          <option value="huwavai">huwavai</option>
          <option value="oppo">oppo</option>
          <option value="vivo">vivo</option>
          <option value="realme">realme</option>
          <option value="infinix">infinix</option>
          <option value="tecno">tecno</option>
          <option value="xiaomi">xiaomi</option>
        </select>
        <input
          type="text"
          required
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Display"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <RamRom>
          <select
          value={ram}
            className="RamRom"
            onChange={(e) => setRam(e.target.value)}
            required
          >
            <option value="Select Ram">Select Ram</option>
            <option value="2GB">2 GB</option>
            <option value="3GB">3 GB</option>
            <option value="4GB">4 GB</option>
            <option value="6GB">6 GB</option>
            <option value="8GB">8 GB</option>
            <option value="10GB">10 GB</option>
            <option value="12GB">12 GB</option>
          </select>
          <select
           value={rom}
            className="RamRom"
            onChange={(e) => setRom(e.target.value)}
            required
          >
            <option value="Select Rom">Select Rom</option>
            <option value="16GB">16 GB</option>
            <option value="32GB">32 GB</option>
            <option value="64GB">64 GB</option>
            <option value="128GB">128 GB</option>
            <option value="256GB">256 GB</option>
            <option value="512GB">512 GB</option>
            <option value="1024GB">1024 GB</option>
          </select>
        </RamRom>
        <input
          type="text"
          required
          placeholder="Battery"
          value={battery}
          onChange={(e) => setBattery(e.target.value)}
        />
        <input
          type="text"
          required
          value={camera}
          placeholder="Camera 108 MP + 8MP + 2MP +2MP"
          onChange={(e) => setCamera(e.target.value)}
        />
        <PrimaryButton>Update</PrimaryButton>
      </StyledForm>
      <ImagePreview>
        {productImg ? (
          <>
            <img src={productImg} alt="" />
          </>
        ) : (
          <>
            <p>image preview here</p>
          </>
        )}
      </ImagePreview>
    </StyledCreateProduct>
  );
};

export default UpdateProduct;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  max-width: 300px;
  margin-top: 2rem;
  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;
    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }
  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledCreateProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;

  @media (max-width:600px) {
    grid-template-columns: 1fr;
  }
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 
  color: rgb(78, 78, 78);
  img {
    max-width: 100%;
  }

  @media (max-width:600px) {
    margin: 0;
  }
`;

const RamRom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
