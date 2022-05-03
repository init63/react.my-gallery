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
      const {order, comment} = req.body;
      const {img} = req.files;
      let fileName = uuidv4() + '.jpg';
      img.mv(path.resolve(path.dirname(''), 'static', fileName));

      const image = await Image.create({order, name: fileName, comment});

      return res.json(image);
    } catch (e) {
      console.log(e.message);
    }
  }

  async editOrder(req, res) {}

  async editComment(req, res) {}
}

export default new ImageController();
