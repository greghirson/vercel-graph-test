
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-03 19:00:00", "b": 1052.4}, {"a": "2024-11-03 19:05:00", "b": 1043.2}, {"a": "2024-11-03 19:10:00", "b": 889.6}, {"a": "2024-11-03 19:15:00", "b": 902.4}, {"a": "2024-11-03 19:20:00", "b": 904.4}, {"a": "2024-11-03 19:25:00", "b": 896.6666666666666}, {"a": "2024-11-03 19:30:00", "b": 896.25}, {"a": "2024-11-03 19:35:00", "b": 894.6}, {"a": "2024-11-03 19:40:00", "b": 890.75}, {"a": "2024-11-03 19:45:00", "b": 888.0}, {"a": "2024-11-03 19:50:00", "b": 883.8}, {"a": "2024-11-03 19:55:00", "b": 852.4}, {"a": "2024-11-03 20:00:00", "b": 852.8}, {"a": "2024-11-03 20:05:00", "b": 867.0}, {"a": "2024-11-03 20:10:00", "b": 874.4}, {"a": "2024-11-03 20:15:00", "b": 854.25}, {"a": "2024-11-03 20:20:00", "b": 824.0}, {"a": "2024-11-03 20:25:00", "b": 820.75}, {"a": "2024-11-03 20:30:00", "b": 819.8}, {"a": "2024-11-03 20:35:00", "b": 838.0}, {"a": "2024-11-03 20:40:00", "b": 835.2}, {"a": "2024-11-03 20:45:00", "b": 830.4}, {"a": "2024-11-03 20:50:00", "b": 840.8}, {"a": "2024-11-03 20:55:00", "b": 829.75}, {"a": "2024-11-03 21:00:00", "b": 821.6}, {"a": "2024-11-03 21:05:00", "b": 826.6}, {"a": "2024-11-03 21:10:00", "b": 828.25}, {"a": "2024-11-03 21:15:00", "b": 799.2}, {"a": "2024-11-03 21:20:00", "b": 803.4}, {"a": "2024-11-03 21:25:00", "b": 822.75}, {"a": "2024-11-03 21:30:00", "b": 816.8}, {"a": "2024-11-03 21:35:00", "b": 801.75}, {"a": "2024-11-03 21:40:00", "b": 776.0}, {"a": "2024-11-03 21:45:00", "b": 785.25}, {"a": "2024-11-03 21:50:00", "b": 768.6}, {"a": "2024-11-03 21:55:00", "b": 773.5}, {"a": "2024-11-03 22:00:00", "b": 764.8}, {"a": "2024-11-03 22:05:00", "b": 778.2}, {"a": "2024-11-03 22:10:00", "b": 748.4}, {"a": "2024-11-03 22:15:00", "b": 752.75}, {"a": "2024-11-03 22:20:00", "b": 768.75}, {"a": "2024-11-03 22:25:00", "b": 764.4}, {"a": "2024-11-03 22:30:00", "b": 751.0}, {"a": "2024-11-03 22:35:00", "b": 736.5}, {"a": "2024-11-03 22:40:00", "b": 733.0}, {"a": "2024-11-03 22:45:00", "b": 728.6}, {"a": "2024-11-03 22:50:00", "b": 695.8}, {"a": "2024-11-03 22:55:00", "b": 691.0}, {"a": "2024-11-03 23:00:00", "b": 711.2}, {"a": "2024-11-03 23:05:00", "b": 691.6}, {"a": "2024-11-03 23:10:00", "b": 685.0}, {"a": "2024-11-03 23:15:00", "b": 695.25}, {"a": "2024-11-03 23:20:00", "b": 709.8}, {"a": "2024-11-03 23:25:00", "b": 687.6}, {"a": "2024-11-03 23:30:00", "b": 656.2}, {"a": "2024-11-03 23:35:00", "b": 656.8}, {"a": "2024-11-03 23:40:00", "b": 673.0}, {"a": "2024-11-03 23:45:00", "b": 652.0}, {"a": "2024-11-03 23:50:00", "b": 639.6}, {"a": "2024-11-03 23:55:00", "b": 637.0}, {"a": "2024-11-04 00:00:00", "b": 646.8}, {"a": "2024-11-04 00:05:00", "b": 639.0}, {"a": "2024-11-04 00:10:00", "b": 619.6}, {"a": "2024-11-04 00:15:00", "b": 620.8}, {"a": "2024-11-04 00:20:00", "b": 618.8}, {"a": "2024-11-04 00:25:00", "b": 597.4}, {"a": "2024-11-04 00:30:00", "b": 604.0}, {"a": "2024-11-04 00:35:00", "b": 611.0}, {"a": "2024-11-04 00:40:00", "b": 600.6}, {"a": "2024-11-04 00:45:00", "b": 581.6}, {"a": "2024-11-04 00:50:00", "b": 580.0}, {"a": "2024-11-04 00:55:00", "b": 580.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    