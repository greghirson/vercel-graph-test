
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-29 18:00:00", "b": 572.8}, {"a": "2025-03-29 18:05:00", "b": 583.0}, {"a": "2025-03-29 18:10:00", "b": 593.0}, {"a": "2025-03-29 18:15:00", "b": 597.0}, {"a": "2025-03-29 18:20:00", "b": 603.75}, {"a": "2025-03-29 18:25:00", "b": 591.2}, {"a": "2025-03-29 18:30:00", "b": 608.4}, {"a": "2025-03-29 18:35:00", "b": 612.0}, {"a": "2025-03-29 18:40:00", "b": 599.3333333333334}, {"a": "2025-03-29 18:45:00", "b": 640.4}, {"a": "2025-03-29 18:50:00", "b": 660.0}, {"a": "2025-03-29 18:55:00", "b": 652.6}, {"a": "2025-03-29 19:00:00", "b": 658.4}, {"a": "2025-03-29 19:05:00", "b": 646.6}, {"a": "2025-03-29 19:10:00", "b": 617.6}, {"a": "2025-03-29 19:15:00", "b": 602.4}, {"a": "2025-03-29 19:20:00", "b": 618.25}, {"a": "2025-03-29 19:25:00", "b": 624.5}, {"a": "2025-03-29 19:30:00", "b": 625.4}, {"a": "2025-03-29 19:35:00", "b": 631.6}, {"a": "2025-03-29 19:40:00", "b": 657.5}, {"a": "2025-03-29 19:45:00", "b": 662.8}, {"a": "2025-03-29 19:50:00", "b": 686.75}, {"a": "2025-03-29 19:55:00", "b": 690.75}, {"a": "2025-03-29 20:00:00", "b": 673.75}, {"a": "2025-03-29 20:05:00", "b": 670.0}, {"a": "2025-03-29 20:10:00", "b": 659.2}, {"a": "2025-03-29 20:15:00", "b": 670.6}, {"a": "2025-03-29 20:20:00", "b": 684.4}, {"a": "2025-03-29 20:25:00", "b": 671.0}, {"a": "2025-03-29 20:30:00", "b": 660.6}, {"a": "2025-03-29 20:35:00", "b": 675.0}, {"a": "2025-03-29 20:40:00", "b": 674.6}, {"a": "2025-03-29 20:45:00", "b": 662.0}, {"a": "2025-03-29 20:50:00", "b": 671.75}, {"a": "2025-03-29 20:55:00", "b": 660.25}, {"a": "2025-03-29 21:00:00", "b": 665.25}, {"a": "2025-03-29 21:05:00", "b": 683.0}, {"a": "2025-03-29 21:10:00", "b": 698.5}, {"a": "2025-03-29 21:15:00", "b": 702.0}, {"a": "2025-03-29 21:20:00", "b": 705.5}, {"a": "2025-03-29 21:25:00", "b": 731.6}, {"a": "2025-03-29 21:30:00", "b": 755.2}, {"a": "2025-03-29 21:35:00", "b": 762.25}, {"a": "2025-03-29 21:40:00", "b": 773.8}, {"a": "2025-03-29 21:45:00", "b": 790.2}, {"a": "2025-03-29 21:50:00", "b": 792.6}, {"a": "2025-03-29 21:55:00", "b": 793.5}, {"a": "2025-03-29 22:00:00", "b": 792.8}, {"a": "2025-03-29 22:05:00", "b": 808.8}, {"a": "2025-03-29 22:10:00", "b": 828.4}, {"a": "2025-03-29 22:15:00", "b": 843.4}, {"a": "2025-03-29 22:20:00", "b": 862.0}, {"a": "2025-03-29 22:25:00", "b": 843.6}, {"a": "2025-03-29 22:30:00", "b": 824.8}, {"a": "2025-03-29 22:35:00", "b": 825.75}, {"a": "2025-03-29 22:40:00", "b": 831.4}, {"a": "2025-03-29 22:45:00", "b": 834.75}, {"a": "2025-03-29 22:50:00", "b": 819.0}, {"a": "2025-03-29 22:55:00", "b": 796.25}, {"a": "2025-03-29 23:00:00", "b": 811.0}, {"a": "2025-03-29 23:05:00", "b": 801.5}, {"a": "2025-03-29 23:10:00", "b": 812.8}, {"a": "2025-03-29 23:15:00", "b": 800.6}, {"a": "2025-03-29 23:20:00", "b": 788.4}, {"a": "2025-03-29 23:25:00", "b": 775.0}, {"a": "2025-03-29 23:30:00", "b": 781.4}, {"a": "2025-03-29 23:35:00", "b": 777.25}, {"a": "2025-03-29 23:40:00", "b": 777.3333333333334}, {"a": "2025-03-29 23:45:00", "b": 784.0}, {"a": "2025-03-29 23:50:00", "b": 769.25}, {"a": "2025-03-29 23:55:00", "b": 765.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    