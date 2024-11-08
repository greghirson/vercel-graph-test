
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-08 03:20:00", "b": 573.8}, {"a": "2024-11-08 03:25:00", "b": 579.8}, {"a": "2024-11-08 03:30:00", "b": 572.6}, {"a": "2024-11-08 03:35:00", "b": 567.25}, {"a": "2024-11-08 03:40:00", "b": 569.0}, {"a": "2024-11-08 03:45:00", "b": 571.4}, {"a": "2024-11-08 03:50:00", "b": 579.0}, {"a": "2024-11-08 03:55:00", "b": 588.4}, {"a": "2024-11-08 04:00:00", "b": 608.2}, {"a": "2024-11-08 04:05:00", "b": 626.2}, {"a": "2024-11-08 04:10:00", "b": 636.75}, {"a": "2024-11-08 04:15:00", "b": 636.0}, {"a": "2024-11-08 04:20:00", "b": 631.8}, {"a": "2024-11-08 04:25:00", "b": 635.0}, {"a": "2024-11-08 04:30:00", "b": 618.75}, {"a": "2024-11-08 04:35:00", "b": 609.8}, {"a": "2024-11-08 04:40:00", "b": 610.4}, {"a": "2024-11-08 04:45:00", "b": 608.25}, {"a": "2024-11-08 04:50:00", "b": 635.25}, {"a": "2024-11-08 04:55:00", "b": 628.8}, {"a": "2024-11-08 05:00:00", "b": 626.0}, {"a": "2024-11-08 05:05:00", "b": 620.2}, {"a": "2024-11-08 05:10:00", "b": 619.5}, {"a": "2024-11-08 05:15:00", "b": 625.4}, {"a": "2024-11-08 05:20:00", "b": 629.0}, {"a": "2024-11-08 05:25:00", "b": 620.0}, {"a": "2024-11-08 05:30:00", "b": 614.0}, {"a": "2024-11-08 05:35:00", "b": 610.2}, {"a": "2024-11-08 05:40:00", "b": 608.5}, {"a": "2024-11-08 05:45:00", "b": 603.75}, {"a": "2024-11-08 05:50:00", "b": 601.4}, {"a": "2024-11-08 05:55:00", "b": 601.6}, {"a": "2024-11-08 06:00:00", "b": 598.0}, {"a": "2024-11-08 06:05:00", "b": 603.25}, {"a": "2024-11-08 06:10:00", "b": 586.75}, {"a": "2024-11-08 06:15:00", "b": 579.0}, {"a": "2024-11-08 06:20:00", "b": 575.75}, {"a": "2024-11-08 06:25:00", "b": 575.25}, {"a": "2024-11-08 06:30:00", "b": 584.2}, {"a": "2024-11-08 06:35:00", "b": 585.4}, {"a": "2024-11-08 06:40:00", "b": 576.4}, {"a": "2024-11-08 06:45:00", "b": 582.6}, {"a": "2024-11-08 06:50:00", "b": 587.25}, {"a": "2024-11-08 06:55:00", "b": 584.0}, {"a": "2024-11-08 07:00:00", "b": 584.6}, {"a": "2024-11-08 07:05:00", "b": 587.6}, {"a": "2024-11-08 07:10:00", "b": 597.25}, {"a": "2024-11-08 07:15:00", "b": 608.5}, {"a": "2024-11-08 07:20:00", "b": 610.25}, {"a": "2024-11-08 07:25:00", "b": 612.0}, {"a": "2024-11-08 07:30:00", "b": 622.8}, {"a": "2024-11-08 07:35:00", "b": 635.5}, {"a": "2024-11-08 07:40:00", "b": 633.75}, {"a": "2024-11-08 07:45:00", "b": 649.25}, {"a": "2024-11-08 07:50:00", "b": 635.6}, {"a": "2024-11-08 07:55:00", "b": 645.8}, {"a": "2024-11-08 08:00:00", "b": 671.0}, {"a": "2024-11-08 08:05:00", "b": 759.0}, {"a": "2024-11-08 08:10:00", "b": 800.8}, {"a": "2024-11-08 08:15:00", "b": 849.6}, {"a": "2024-11-08 08:20:00", "b": 856.25}, {"a": "2024-11-08 08:25:00", "b": 839.2}, {"a": "2024-11-08 08:30:00", "b": 797.4}, {"a": "2024-11-08 08:35:00", "b": 763.8}, {"a": "2024-11-08 08:40:00", "b": 770.0}, {"a": "2024-11-08 08:45:00", "b": 772.8}, {"a": "2024-11-08 08:50:00", "b": 767.25}, {"a": "2024-11-08 08:55:00", "b": 792.4}, {"a": "2024-11-08 09:00:00", "b": 798.0}, {"a": "2024-11-08 09:05:00", "b": 790.4}, {"a": "2024-11-08 09:10:00", "b": 758.6}, {"a": "2024-11-08 09:15:00", "b": 748.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    