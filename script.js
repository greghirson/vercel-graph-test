
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-08 06:30:00", "b": 584.2}, {"a": "2024-11-08 06:35:00", "b": 585.4}, {"a": "2024-11-08 06:40:00", "b": 576.4}, {"a": "2024-11-08 06:45:00", "b": 582.6}, {"a": "2024-11-08 06:50:00", "b": 587.25}, {"a": "2024-11-08 06:55:00", "b": 584.0}, {"a": "2024-11-08 07:00:00", "b": 584.6}, {"a": "2024-11-08 07:05:00", "b": 587.6}, {"a": "2024-11-08 07:10:00", "b": 597.25}, {"a": "2024-11-08 07:15:00", "b": 608.5}, {"a": "2024-11-08 07:20:00", "b": 610.25}, {"a": "2024-11-08 07:25:00", "b": 612.0}, {"a": "2024-11-08 07:30:00", "b": 622.8}, {"a": "2024-11-08 07:35:00", "b": 635.5}, {"a": "2024-11-08 07:40:00", "b": 633.75}, {"a": "2024-11-08 07:45:00", "b": 649.25}, {"a": "2024-11-08 07:50:00", "b": 635.6}, {"a": "2024-11-08 07:55:00", "b": 645.8}, {"a": "2024-11-08 08:00:00", "b": 671.0}, {"a": "2024-11-08 08:05:00", "b": 759.0}, {"a": "2024-11-08 08:10:00", "b": 800.8}, {"a": "2024-11-08 08:15:00", "b": 849.6}, {"a": "2024-11-08 08:20:00", "b": 856.25}, {"a": "2024-11-08 08:25:00", "b": 839.2}, {"a": "2024-11-08 08:30:00", "b": 797.4}, {"a": "2024-11-08 08:35:00", "b": 763.8}, {"a": "2024-11-08 08:40:00", "b": 770.0}, {"a": "2024-11-08 08:45:00", "b": 772.8}, {"a": "2024-11-08 08:50:00", "b": 767.25}, {"a": "2024-11-08 08:55:00", "b": 792.4}, {"a": "2024-11-08 09:00:00", "b": 798.0}, {"a": "2024-11-08 09:05:00", "b": 790.4}, {"a": "2024-11-08 09:10:00", "b": 758.6}, {"a": "2024-11-08 09:15:00", "b": 748.25}, {"a": "2024-11-08 09:20:00", "b": 744.0}, {"a": "2024-11-08 09:25:00", "b": 739.4}, {"a": "2024-11-08 09:30:00", "b": 753.2}, {"a": "2024-11-08 09:35:00", "b": 758.25}, {"a": "2024-11-08 09:40:00", "b": 781.8}, {"a": "2024-11-08 09:45:00", "b": 799.8}, {"a": "2024-11-08 09:50:00", "b": 756.6}, {"a": "2024-11-08 09:55:00", "b": 755.5}, {"a": "2024-11-08 10:00:00", "b": 762.0}, {"a": "2024-11-08 10:05:00", "b": 762.25}, {"a": "2024-11-08 10:10:00", "b": 767.6}, {"a": "2024-11-08 10:15:00", "b": 758.5}, {"a": "2024-11-08 10:20:00", "b": 743.6}, {"a": "2024-11-08 10:25:00", "b": 741.75}, {"a": "2024-11-08 10:30:00", "b": 745.8}, {"a": "2024-11-08 10:35:00", "b": 736.4}, {"a": "2024-11-08 10:40:00", "b": 729.8}, {"a": "2024-11-08 10:45:00", "b": 719.6}, {"a": "2024-11-08 10:50:00", "b": 719.8}, {"a": "2024-11-08 10:55:00", "b": 707.6}, {"a": "2024-11-08 11:00:00", "b": 712.6}, {"a": "2024-11-08 11:05:00", "b": 708.8}, {"a": "2024-11-08 11:10:00", "b": 729.0}, {"a": "2024-11-08 11:15:00", "b": 715.0}, {"a": "2024-11-08 11:20:00", "b": 704.5}, {"a": "2024-11-08 11:25:00", "b": 686.25}, {"a": "2024-11-08 11:30:00", "b": 666.0}, {"a": "2024-11-08 11:35:00", "b": 672.75}, {"a": "2024-11-08 11:40:00", "b": 680.25}, {"a": "2024-11-08 11:45:00", "b": 656.0}, {"a": "2024-11-08 11:50:00", "b": 630.4}, {"a": "2024-11-08 11:55:00", "b": 616.6}, {"a": "2024-11-08 12:00:00", "b": 608.6666666666666}, {"a": "2024-11-08 12:05:00", "b": 607.75}, {"a": "2024-11-08 12:10:00", "b": 603.8}, {"a": "2024-11-08 12:15:00", "b": 603.6}, {"a": "2024-11-08 12:20:00", "b": 595.75}, {"a": "2024-11-08 12:25:00", "b": 599.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    