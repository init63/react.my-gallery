import {v4 as uuidv4} from 'uuid';
import path from 'path';
import {Image} from '../models/models.js';
import {response} from 'express';

// TODO: метод getAll().
// Добавить сортировку, что бы картинки отправлялись на клиент в порядке
// убывания
class ImageController {
  async getAll(req, res) {
    const images = await Image.findAll();
    res.json(images);
  }

  async add(req, res) {
    try {
      const {description} = req.body;
      const {file} = req.files;
      const allImages = await Image.findAll();

      let newOrder;

      if (allImages.length === 0) {
        newOrder = 1;
      } else {
        const lastImage = allImages[allImages.length - 1];
        const orderLastImage = lastImage.order;
        newOrder = orderLastImage + 1;
      }

      const fileNameAndExtension = file.name.split('.');
      const fileExtension = fileNameAndExtension[fileNameAndExtension.length - 1];
      const fileName = `${uuidv4()}.${fileExtension}`;
      file.mv(path.resolve(path.dirname(''), 'static', fileName));
      const image = await Image.create({order: newOrder, file_name: fileName, description});

      return res.json(image);
    } catch (e) {
      console.log(e.message);
    }
  }

  async editOrder(req, res) {}

  async editDescription(req, res) {
    try {
      const editImage = await Image.update(
        {description: req.body.newDescription},
        {returning: true, where: {id: req.body.id}}
      );
      return res.json(editImage[1]);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new ImageController();
