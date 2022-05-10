import {v4 as uuidv4} from 'uuid';
import path from 'path';
import {Image} from '../models/models.js';

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
      const {comment} = req.body;
      const {files} = req.files;
      const allImages = await Image.findAll();
      const images = [];

      let newOrder;

      if (allImages.length === 0) {
        newOrder = 1;
      } else {
        newOrder = allImages[allImages.length - 1].order + 1;
      }

      for (const file in files) {
        let fileExtension = file.name.split('.')[-1];
        let fileName = uuidv4() + fileExtension;
        file.mv(path.resolve(path.dirname(''), 'static', fileName));
        images.push(await Image.create({order: newOrder, name: fileName, comment}));
        newOrder++;
      }

      return res.json(images);
    } catch (e) {
      console.log(e.message);
    }
  }

  async editOrder(req, res) {}

  async editComment(req, res) {}
}

export default new ImageController();
