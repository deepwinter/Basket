require 'test/unit'
require 'shoulda'
require_relative '../lib/lattice/lattice.rb'

class TestThings < Test::Unit::TestCase

  context 'getXml' do
    should 'load Xml' do
      xml = Lattice.getXML
      assert_not_nil(xml)
    end
  end


  context 'buildUIForDocument' do
    should "exist" do
      HTMLChunks = Lattice::buildUIForDocumentType('textOnly')
      assert_not_nil(HTMLChunks)
    end

    should "should build checkbox" do
      HTMLChunks2 = Lattice::buildUIForDocumentType('checkbox')
      assert_not_nil(HTMLChunks2)
    end
  end

  context 'getAttributesForDocumentType' do
    should 'work' do
      attributes = Lattice.getAttributesForDocumentType('textOnly')
      assert_not_nil(attributes)
    end
  end

  context 'getDocumentTypes' do
    should 'return array' do
      types = Lattice.getDocumentTypes()
      assert_not_nil(types)
    end
  end
end
