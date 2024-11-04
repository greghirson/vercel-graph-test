
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-03 12:30:00", "b": 506.8}, {"a": "2024-11-03 12:35:00", "b": 517.4}, {"a": "2024-11-03 12:40:00", "b": 635.4}, {"a": "2024-11-03 12:45:00", "b": 660.25}, {"a": "2024-11-03 12:50:00", "b": 648.0}, {"a": "2024-11-03 12:55:00", "b": 651.4}, {"a": "2024-11-03 13:00:00", "b": 643.6}, {"a": "2024-11-03 13:05:00", "b": 618.8}, {"a": "2024-11-03 13:10:00", "b": 604.2}, {"a": "2024-11-03 13:15:00", "b": 603.75}, {"a": "2024-11-03 13:20:00", "b": 592.3333333333334}, {"a": "2024-11-03 13:25:00", "b": 588.0}, {"a": "2024-11-03 13:30:00", "b": 598.4}, {"a": "2024-11-03 13:35:00", "b": 611.4}, {"a": "2024-11-03 13:40:00", "b": 603.25}, {"a": "2024-11-03 13:45:00", "b": 584.2}, {"a": "2024-11-03 13:50:00", "b": 601.0}, {"a": "2024-11-03 13:55:00", "b": 593.8}, {"a": "2024-11-03 14:00:00", "b": 580.2}, {"a": "2024-11-03 14:05:00", "b": 587.4}, {"a": "2024-11-03 14:10:00", "b": 597.8}, {"a": "2024-11-03 14:15:00", "b": 610.6}, {"a": "2024-11-03 14:20:00", "b": 593.5}, {"a": "2024-11-03 14:25:00", "b": 586.6}, {"a": "2024-11-03 14:30:00", "b": 605.6}, {"a": "2024-11-03 14:35:00", "b": 603.0}, {"a": "2024-11-03 14:40:00", "b": 585.75}, {"a": "2024-11-03 14:45:00", "b": 602.5}, {"a": "2024-11-03 14:50:00", "b": 606.2}, {"a": "2024-11-03 14:55:00", "b": 625.8}, {"a": "2024-11-03 15:00:00", "b": 646.4}, {"a": "2024-11-03 15:05:00", "b": 639.6}, {"a": "2024-11-03 15:10:00", "b": 635.2}, {"a": "2024-11-03 15:15:00", "b": 641.0}, {"a": "2024-11-03 15:20:00", "b": 655.4}, {"a": "2024-11-03 15:25:00", "b": 671.8}, {"a": "2024-11-03 15:30:00", "b": 692.6}, {"a": "2024-11-03 15:35:00", "b": 706.4}, {"a": "2024-11-03 15:40:00", "b": 701.2}, {"a": "2024-11-03 15:45:00", "b": 701.0}, {"a": "2024-11-03 15:50:00", "b": 700.0}, {"a": "2024-11-03 15:55:00", "b": 695.25}, {"a": "2024-11-03 16:00:00", "b": 699.0}, {"a": "2024-11-03 16:05:00", "b": 699.6}, {"a": "2024-11-03 16:10:00", "b": 707.25}, {"a": "2024-11-03 16:15:00", "b": 738.4}, {"a": "2024-11-03 16:20:00", "b": 792.4}, {"a": "2024-11-03 16:25:00", "b": 803.5}, {"a": "2024-11-03 16:30:00", "b": 790.25}, {"a": "2024-11-03 16:35:00", "b": 781.6666666666666}, {"a": "2024-11-03 16:40:00", "b": 781.25}, {"a": "2024-11-03 16:45:00", "b": 786.25}, {"a": "2024-11-03 16:50:00", "b": 794.2}, {"a": "2024-11-03 16:55:00", "b": 787.6}, {"a": "2024-11-03 17:00:00", "b": 794.8}, {"a": "2024-11-03 17:05:00", "b": 808.6}, {"a": "2024-11-03 17:10:00", "b": 809.6666666666666}, {"a": "2024-11-03 17:15:00", "b": 780.4}, {"a": "2024-11-03 17:20:00", "b": 767.0}, {"a": "2024-11-03 17:25:00", "b": 787.4}, {"a": "2024-11-03 17:30:00", "b": 790.0}, {"a": "2024-11-03 17:35:00", "b": 780.8}, {"a": "2024-11-03 17:40:00", "b": 765.2}, {"a": "2024-11-03 17:45:00", "b": 797.0}, {"a": "2024-11-03 17:50:00", "b": 777.2}, {"a": "2024-11-03 17:55:00", "b": 777.0}, {"a": "2024-11-03 18:00:00", "b": 761.4}, {"a": "2024-11-03 18:05:00", "b": 760.6666666666666}, {"a": "2024-11-03 18:10:00", "b": 759.0}, {"a": "2024-11-03 18:15:00", "b": 746.5}, {"a": "2024-11-03 18:20:00", "b": 733.5}, {"a": "2024-11-03 18:25:00", "b": 762.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    